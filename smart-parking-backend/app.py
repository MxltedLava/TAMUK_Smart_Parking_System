from flask import Flask, jsonify
from camera_processor import process_camera_feed
from database import check_vehicle_clearance

app = Flask(__name__)

@app.route('/scan-license', methods=['GET'])
def scan_license():
    license_plate = process_camera_feed()
    
    if license_plate:
        lot_clearance = check_vehicle_clearance(license_plate)
        
        if lot_clearance:
            return jsonify({"status": "Approved", "lot": lot_clearance})
        else:
            return jsonify({"status": "Denied", "message": "No parking clearance"})

    return jsonify({"status": "Error", "message": "License plate not detected"})

if __name__ == '__main__':
    app.run(debug=True)