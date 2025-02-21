import cv2
import pytesseract

# Load the Haar cascade for license plate detection
plate_cascade = cv2.CascadeClassifier('haarcascade_russian_plate_number.xml')

def extract_license_plate(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    plates = plate_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in plates:
        plate_roi = frame[y:y+h, x:x+w]
        plate_text = extract_text(plate_roi)
        return plate_text.strip()

    return None

def extract_text(plate_roi):
    """Extract text from detected license plate using Tesseract OCR."""
    gray = cv2.cvtColor(plate_roi, cv2.COLOR_BGR2GRAY)
    _, threshold = cv2.threshold(gray, 100, 255, cv2.THRESH_BINARY)
    plate_text = pytesseract.image_to_string(threshold, config='--psm 7')
    return plate_text

def process_camera_feed():
    cap = cv2.VideoCapture(0)  # Open webcam
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        license_plate = extract_license_plate(frame)
        if license_plate:
            print(f"Detected License Plate: {license_plate}")
            return license_plate

        cv2.imshow("License Plate Detection", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()