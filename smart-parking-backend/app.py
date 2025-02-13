from flask import Flask, request, jsonify
import psycopg2
from database import get_db_connection, check_vehicle_clearance
from camera_processor import process_camera_feed

app = Flask(__name__)

# Validate license plate before allowing parking
@app.route('/validate_parking', methods=['POST'])
def validate_parking():
    data = request.files.get("image")
    lot = request.form.get("lot")

    result = process_camera_feed(data, lot)

    if result["clearance"]:
        return jsonify({"message": "Vehicle approved for parking", "plate": result["plate_number"]}), 200
    else:
        return jsonify({"error": "Unauthorized vehicle", "plate": result["plate_number"]}), 403