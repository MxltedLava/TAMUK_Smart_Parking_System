import cv2

image_path = "test_plate.jpg"  # Ensure this path is correct
image = cv2.imread(image_path)

if image is None:
    print("❌ Error: Image not found or cannot be read. Check the file path.")
else:
    print("✅ Image loaded successfully. Displaying it now...")
    cv2.imshow("Loaded Image", image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
