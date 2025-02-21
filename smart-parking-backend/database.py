import psycopg2

def get_db_connection():
    return psycopg2.connect(
        dbname="smart_parking",
        user="postgres",
        password="yourpassword",
        host="localhost"
    )

def check_vehicle_clearance(license_plate):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT lot FROM vehicle_permits WHERE license_plate = %s", (license_plate,))
    result = cursor.fetchone()
    
    conn.close()
    return result if result else None