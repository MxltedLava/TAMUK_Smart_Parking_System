from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from datetime import datetime
from .models import VehiclePermit, ParkingAttempt
from .plate_recognition import extract_plate_text
from .notifications import send_email_alert, send_sms_alert
import json
from django.http import JsonResponse
# Fuzzy matching (at least 5 characters must match)
def fuzzy_match(plate_a: str, plate_b: str, threshold=5) -> bool:
    match_count = sum(1 for a, b in zip(plate_a.upper(), plate_b.upper()) if a == b)
    return match_count >= threshold

# ✅ API: Register a vehicle
@csrf_exempt
@require_POST
def register_vehicle(request):
    data = json.loads(request.body)
    plate = data.get("plate")
    owner_name = data.get("owner_name")
    pin = data.get("pin")

    if not plate or not owner_name or not pin:
        return JsonResponse({"success": False, "error": "Missing required fields"}, status=400)

    if VehiclePermit.objects.filter(plate_number=plate).exists():
        return JsonResponse({"success": False, "error": "Vehicle already registered"}, status=400)

    VehiclePermit.objects.create(
        plate_number=plate.upper(),
        owner_name=owner_name,
        pin=pin,
        clearance_level="general"
    )

    return JsonResponse({"success": True, "message": "Vehicle registered successfully"})


# ✅ API: Owner login
@csrf_exempt
@require_POST
def owner_login(request):
    data = json.loads(request.body)
    plate = data.get("plate")
    pin = data.get("pin")

    try:
        vehicle = VehiclePermit.objects.get(plate_number=plate, pin=pin)
        return JsonResponse({"success": True, "plate": plate, "owner": vehicle.owner_name})
    except VehiclePermit.DoesNotExist:
        return JsonResponse({"success": False, "error": "Invalid credentials"}, status=401)


# ✅ API: Check plate clearance (called after plate image is processed)
def check_clearance(request):
    image_path = request.GET.get("image")
    lot_name = request.GET.get("lot", "Main Lot")

    if not image_path:
        return JsonResponse({"error": "Image path required"}, status=400)

    # Step 1: Extract plate text
    try:
        plate_text = extract_plate_text(image_path)
    except Exception as e:
        return JsonResponse({"error": f"Text extraction failed: {str(e)}"}, status=500)

    matched_vehicle = None

    # Step 2: Fuzzy match with registered plates
    for vehicle in VehiclePermit.objects.all():
        if fuzzy_match(plate_text, vehicle.plate_number):
            matched_vehicle = vehicle
            break

    # Step 3: Log & respond
    if matched_vehicle:
        ParkingAttempt.objects.create(
            plate_read=plate_text,
            matched_plate=matched_vehicle.plate_number,
            status="cleared",
            image_path=image_path,
            lot=lot_name
        )
        return JsonResponse({
            "plate": plate_text,
            "status": "cleared",
            "owner": matched_vehicle.owner_name
        })

    else:
        ParkingAttempt.objects.create(
            plate_read=plate_text,
            matched_plate=None,
            status="unauthorized",
            image_path=image_path,
            lot=lot_name
        )

        # 🔔 Trigger alerts
        send_email_alert(plate_text, image_path)
        send_sms_alert(plate_text)

        return JsonResponse({
            "plate": plate_text,
            "status": "unauthorized"
        })


# ✅ API: Get parking history for an owner
def get_parking_history(request):
    plate = request.GET.get("plate")
    if not plate:
        return JsonResponse({"error": "Plate required"}, status=400)

    attempts = ParkingAttempt.objects.filter(plate_read__icontains=plate).order_by("-timestamp")

    results = [
        {
            "plate_read": a.plate_read,
            "matched_plate": a.matched_plate,
            "status": a.status,
            "image_path": a.image_path,
            "timestamp": a.timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            "lot": a.lot
        }
        for a in attempts
    ]
    return JsonResponse(results, safe=False)


# ✅ API: Get only unauthorized attempts for admin/security dashboard
def get_unauthorized_attempts(request):
    attempts = ParkingAttempt.objects.filter(status="unauthorized").order_by("-timestamp")

    results = [
        {
            "plate_read": a.plate_read,
            "image_path": a.image_path,
            "timestamp": a.timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            "lot": a.lot
        }
        for a in attempts
    ]
    return JsonResponse(results, safe=False)