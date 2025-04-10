import cv2
from datetime import datetime
import os

def capture_image():
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()

    if ret:
        filename = f"captured_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpg"
        filepath = os.path.join("media", filename)
        cv2.imwrite(filepath, frame)
        return filepath
    else:
        raise Exception("Image capture failed")