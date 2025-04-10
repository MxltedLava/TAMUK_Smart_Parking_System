# models.py
from django.db import models

class VehiclePermit(models.Model):
    plate_number = models.CharField(max_length=20, unique=True)
    owner_name = models.CharField(max_length=100)
    clearance_level = models.CharField(max_length=50)

class ParkingAttempt(models.Model):
    plate_read = models.CharField(max_length=20)
    matched_plate = models.CharField(max_length=20, null=True, blank=True)
    status = models.CharField(max_length=20)  # 'cleared' or 'unauthorized'
    image_path = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    lot = models.CharField(max_length=100, default="Main Lot")  # new field