import psycopg2
from config import DB_CONFIG

# Establish a connection to PostgreSQL
def get_db_connection():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except Exception as e:
        print("Error connecting to database:", e)
        return None

# Check if a vehicle is allowed to park in a specific lot
def check_vehicle_clearance(plate_number, lot):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "SELECT COUNT(*) FROM vehicles WHERE plate_number = %s AND assigned_lot = %s",
        (plate_number, lot)
    )
    result = cur.fetchone()[0]
    cur.close()
    conn.close()

    return result > 0  # Returns True if vehicle is authorized