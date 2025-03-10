import torch
import cv2
import json
import requests

# Load YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

def detect_vehicles(image_path):
    img = cv2.imread(image_path)
    results = model(img)
    detected_objects = results.pandas().xyxy[0].to_dict(orient="records")
    
    # Filter results for vehicles only
    vehicles = [obj for obj in detected_objects if obj['name'] in ['car', 'truck', 'bus', 'motorbike']]
    
    # Print and send detection results
    print("Detected Vehicles:", vehicles)
    requests.post('http://localhost:5000/api/vehicle', json=vehicles)
    return vehicles

# Example usage
detect_vehicles('sample_parking_lot.jpg')