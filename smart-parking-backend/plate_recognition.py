
# TAMUK Smart Parking System
# YOLO Integration for Object Detection

## Project Structure
# - backend/ : Django backend with YOLO integration for vehicle detection
# - frontend/ : React frontend to display parking data
# - database/ : PostgreSQL for storing detection results
# - sensors/ : Python scripts for sensor communication

# Install YOLOv5 dependencies
pip install torch torchvision yolov5

# Clone YOLOv5 repository
!git clone https://github.com/ultralytics/yolov5

import torch
import cv2
import json
import requests
import psycopg2
import pytesseract

# Load YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

# Database connection
conn = psycopg2.connect(
    dbname="your_database_name",
    user="destinyydlg",
    password="orange",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

def detect_and_extract_plate(image_path):
    # Load and detect objects
    img = cv2.imread(image_path)
    results = model(img)
    detected_objects = results.pandas().xyxy[0].to_dict(orient="records")

    # Filter for license plate (assuming a trained model for plates)
    plates = [obj for obj in detected_objects if obj['name'] == 'license plate']

    if plates:
        # Extract region of interest (ROI)
        for plate in plates:
            x_min, y_min, x_max, y_max = int(plate['xmin']), int(plate['ymin']), int(plate['xmax']), int(plate['ymax'])
            roi = img[y_min:y_max, x_min:x_max]

            # Extract text using Tesseract
            plate_number = pytesseract.image_to_string(roi, config='--psm 8').strip()
            print(f"Detected Plate: {plate_number}")

            # Check if plate is authorized
            cursor.execute("SELECT * FROM authorized_vehicles WHERE plate_number = %s", (plate_number,))
            result = cursor.fetchone()

            if result:
                print("Access Granted")
                # Update status in the database
                cursor.execute("INSERT INTO parking_logs (plate_number, status) VALUES (%s, %s)",
                               (plate_number, 'Authorized'))
            else:
                print("Access Denied")
                cursor.execute("INSERT INTO parking_logs (plate_number, status) VALUES (%s, %s)",
                               (plate_number, 'Unauthorized'))

            conn.commit()
    else:
        print("No license plate detected")

detect_and_extract_plate('perf.png')

