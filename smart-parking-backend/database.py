import psycopg2
from psycopg2 import sql

# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        dbname="smart_parking",
        user="postgres",
        password="your_password",
        host="localhost",
        port="5432"
    )
    return conn

def setup_database():
    """
    Create tables for users and vehicle clearance.
    """
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS vehicles (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            license_plate TEXT UNIQUE NOT NULL,
            lot TEXT NOT NULL
        );
    """)

    conn.commit()
    cur.close()
    conn.close()

if __name__ == "__main__":
    setup_database()
    print("✅ Database setup complete!")