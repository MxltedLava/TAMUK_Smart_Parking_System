import pytesseract
import cv2
# utils.py or part of plate_recognition.py
def fuzzy_match(plate_a: str, plate_b: str, threshold=5) -> bool:
    match_count = sum(1 for a, b in zip(plate_a, plate_b) if a == b)
    return match_count >= threshold
def extract_plate_text(image_path):
    image = cv2.imread(image_path)
    text = pytesseract.image_to_string(image)
    return text.strip().upper()