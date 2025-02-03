from flask import Flask, request, jsonify
from database import get_db_connection
import bcrypt

app = Flask(__name__)

# Register a new user
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Hash the password before storing it
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    conn = get_db_connection()
    if conn:
        cur = conn.cursor()
        try:
            cur.execute("INSERT INTO students (username, email, password_hash) VALUES (%s, %s, %s)",
                        (username, email, hashed_password))
            conn.commit()
            return jsonify({'message': 'Account created successfully'}), 201
        except Exception as e:
            return jsonify({'error': str(e)}), 400
        finally:
            cur.close()
            conn.close()
    else:
        return jsonify({'error': 'Database connection failed'}), 500

if __name__ == '__main__':
    app.run(debug=True)