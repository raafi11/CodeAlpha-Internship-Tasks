from flask import Flask, request, jsonify
import sqlite3
from cryptography.fernet import Fernet

app = Flask(__name__)

conn = sqlite3.connect('secure.db', check_same_thread=False)
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT
)
''')
conn.commit()

key = Fernet.generate_key()
cipher = Fernet(key)

def encrypt_data(data):
    return cipher.encrypt(data.encode())

def decrypt_data(data):
    return cipher.decrypt(data).decode()

SECRET_CODE = "alpha123"

def authorize(code):
    return code == SECRET_CODE

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    email = data['email']
    password = data['password']
    code = data['code']

    if not authorize(code):
        return jsonify({"message": "Access Denied ❌"})

    encrypted_password = encrypt_data(password)

    cursor.execute(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        (email, encrypted_password)
    )
    conn.commit()

    return jsonify({"message": "User added securely ✅"})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    cursor.execute("SELECT password FROM users WHERE email=?", (email,))
    result = cursor.fetchone()

    if result:
        stored_password = decrypt_data(result[0])
        if stored_password == password:
            return jsonify({"message": "Login successful ✅"})
        else:
            return jsonify({"message": "Wrong password ❌"})
    else:
        return jsonify({"message": "User not found ❌"})
    
import os
port = int(os.environ.get("PORT", 5000))
app.run(host='0.0.0.0', port=port)