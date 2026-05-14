import sqlite3

conn = sqlite3.connect('data.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    phone TEXT UNIQUE
)
''')

conn.commit()
print("Database created successfully")

def is_duplicate(email, phone):
    cursor.execute("SELECT * FROM users WHERE email=? OR phone=?", (email, phone))
    return cursor.fetchone() is not None

def insert_user(name, email, phone):
    if is_duplicate(email, phone):
        print("Duplicate data detected ❌")
    else:
        cursor.execute(
            "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)", 
            (name, email, phone)
        )
        conn.commit()
        print("Data added successfully ✅")

insert_user("Rafi", "rafi@gmail.com", "1234567890")
insert_user("Rafi2", "rafi@gmail.com", "9999999999")  # duplicate email
insert_user("Rafi3", "rafi3@gmail.com", "1234567890") # duplicate phone
insert_user("Myraa", "myra@gmail.com", "123643890")
      