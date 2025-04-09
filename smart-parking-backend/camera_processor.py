# camera_processor.py
import cv2
from datetime import datetime
import os

def capture_image():
    cap = cv2.VideoCapture(0)  # Use Pi Camera or USB camera
    if not cap.isOpened():
        raise IOError("Cannot open camera")

    ret, frame = cap.read()
    if ret:
        filename = f"captured_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpg"
        path = os.path.join("media", filename)
        cv2.imwrite(path, frame)
        cap.release()
        return filename
    else:
        cap.release()
        raise Exception("Failed to capture image")