from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def save_vehicle_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Save to PostgreSQL (Assuming a model named VehicleData)
        for vehicle in data:
            VehicleData.objects.create(
                name=vehicle['name'],
                confidence=vehicle['confidence'],
                x_min=vehicle['xmin'],
                y_min=vehicle['ymin'],
                x_max=vehicle['xmax'],
                y_max=vehicle['ymax']
            )
        return JsonResponse({'status': 'success'})