from flask import Flask, request, jsonify
from camera_processor import extract_license_plate

app = Flask(__name__)

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files['image']
    image_path = f"uploads/{image_file.filename}"
    image_file.save(image_path)

    plate_text = extract_license_plate(image_path)

    if plate_text:
        return jsonify({"status": "Success", "plate": plate_text})
    else:
        return jsonify({"status": "Failed", "message": "No plate detected"})

if __name__ == '__main__':
    app.run(debug=True)