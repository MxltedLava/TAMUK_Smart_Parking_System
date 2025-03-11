from django.urls import path
from .views import save_vehicle_data

urlpatterns = [
    path('api/vehicle', save_vehicle_data),
]