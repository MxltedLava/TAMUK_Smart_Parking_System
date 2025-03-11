import cv2
import pytesseract

# Load the YOLO model
import torch
model = torch.hub.load('ultralytics/yolov5', 'custom', path='yolo/yolov5s.pt')

# Load image
image_path = 'test_plate.jpg'  # Replace this with your captured image path
img = cv2.imread(image_path)

# Resize to match the example image (specific size based on your upload)
target_width = 663
target_height = 167
resized_img = cv2.resize(img, (target_width, target_height))

# Convert to grayscale for better OCR results
gray = cv2.cvtColor(resized_img, cv2.COLOR_BGR2GRAY)

# Improve clarity using histogram equalization
enhanced = cv2.equalizeHist(gray)

# Detect license plate text using pytesseract
text = pytesseract.image_to_string(enhanced, config='--psm 8')

# Print detected text
if text.strip():
    print("Detected License Plate:", text.strip())
else:
    print("No license plate detected.")

# Save the processed image for review (optional)
cv2.imwrite("processed_plate.jpg", enhanced)

# Display the processed image (optional)
cv2.imshow("Processed License Plate", enhanced)
cv2.waitKey(0)
cv2.destroyAllWindows()