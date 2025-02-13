import cv2
import numpy as np
import pytesseract
from database import check_vehicle_clearance

def process_camera_feed(image, lot):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)

    plate_number = pytesseract.image_to_string(thresh, config='--psm 8').strip()

    if check_vehicle_clearance(plate_number, lot):
        return {"plate_number": plate_number, "clearance": True}
    else:
        return {"plate_number": plate_number, "clearance": False}