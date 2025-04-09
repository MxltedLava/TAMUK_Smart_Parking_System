# views.py in backend (e.g., sensors/views.py or create a new app)
from django.http import JsonResponse
from .camera_processor import capture_image

def take_picture_view(request):
    try:
        filename = capture_image()
        return JsonResponse({"status": "success", "file": filename})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=500)
