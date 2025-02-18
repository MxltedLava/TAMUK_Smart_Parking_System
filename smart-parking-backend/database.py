import psycopg2
import os

def get_db_connection():
    return psycopg2.connect(
        dbname="smart_parking",
        user=os.getenv("DB_USER", "postgres"),
        password=os.getenv("DB_PASS", "password"),
        host="localhost",
        port="5432"
    )

def setup_database():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Users Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)

    # Vehicle Permits Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS vehicle_permits (
            id SERIAL PRIMARY KEY,
            license_plate TEXT UNIQUE NOT NULL,
            permit_status TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()