from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import connection
import json


@csrf_exempt
def save_vehicle_data(request):
    if request.method == "POST":
        data = json.loads(request.body)
        plate_number = data.get("plate_number")

        with connection.cursor() as cursor:
            # Check if the vehicle is authorized
            cursor.execute(
                "SELECT * FROM authorized_vehicles WHERE plate_number = %s",
                [plate_number],
            )
            result = cursor.fetchone()

            if result:
                status = "Authorized"
            else:
                status = "Unauthorized"

            # Save to parking_logs
            cursor.execute(
                "INSERT INTO parking_logs (plate_number, status) VALUES (%s, %s)",
                (plate_number, status),
            )

        return JsonResponse({"status": status})
