import cv2
import pytesseract
import numpy as np

# Load the Haar cascade for license plate detection
plate_cascade = cv2.CascadeClassifier('haarcascade_russian_plate_number.xml')

# Set Tesseract OCR path (modify based on your OS)
pytesseract.pytesseract.tesseract_cmd = r'/usr/bin/tesseract'  # Update path for Windows if needed

def process_camera_feed():
    cap = cv2.VideoCapture(0)  # Start webcam capture
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        plates = plate_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in plates:
            plate_roi = frame[y:y+h, x:x+w]
            plate_text = extract_text(plate_roi)

            if plate_text:
                print(f"Detected Plate: {plate_text.strip()}")
                return plate_text.strip()

            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)

        cv2.imshow("License Plate Detection", frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

def extract_text(plate_roi):
    gray = cv2.cvtColor(plate_roi, cv2.COLOR_BGR2GRAY)
    _, threshold = cv2.threshold(gray, 100, 255, cv2.THRESH_BINARY)
    plate_text = pytesseract.image_to_string(threshold, config='--psm 7')
    return plate_text