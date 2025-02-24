import cv2
import pytesseract

# Load the Haar cascade
plate_cascade = cv2.CascadeClassifier('haarcascade_russian_plate_number.xml')

def extract_license_plate(image_path):
    """
    Detects a license plate in an image and extracts text using OCR.
    """
    frame = cv2.imread(image_path)

    if frame is None:
        print("❌ Error: Image not found!")
        return None

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Show grayscale image for debugging
    cv2.imshow("Grayscale Image", gray)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    plates = plate_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=4, minSize=(50, 50))

    if len(plates) == 0:
        print("❌ No license plate detected. Adjust parameters or try a different cascade.")
        return None

    for (x, y, w, h) in plates:
        plate_roi = frame[y:y+h, x:x+w]

        # Show detected plate region
        cv2.imshow("Detected Plate", plate_roi)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

        plate_text = extract_text(plate_roi)

        # Draw bounding box around the plate
        cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
        cv2.putText(frame, plate_text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)

        print(f"✅ Detected License Plate: {plate_text.strip()}")

        # Show processed image
        cv2.imshow("License Plate Detection", frame)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

        return plate_text.strip()

    return None

def extract_text(plate_roi):
    """
    Extract text from detected license plate using Tesseract OCR.
    """
    gray = cv2.cvtColor(plate_roi, cv2.COLOR_BGR2GRAY)
    _, threshold = cv2.threshold(gray, 100, 255, cv2.THRESH_BINARY)

    # Show thresholded plate for debugging
    cv2.imshow("Thresholded Plate", threshold)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    plate_text = pytesseract.image_to_string(threshold, config='--psm 7')
    return plate_text

# Run the test
if __name__ == "__main__":
    extract_license_plate("test_plate.jpg")