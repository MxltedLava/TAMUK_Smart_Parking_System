from database import get_db_connection


def check_vehicle_clearance(license_plate):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT permit_status FROM vehicle_permits WHERE license_plate = %s",
        (license_plate,),
    )
    result = cursor.fetchone()
    conn.close()

    if result and result[0] == "approved":
        return True
    return False
