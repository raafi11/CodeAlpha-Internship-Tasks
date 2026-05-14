# CodeAlpha-Internship-Tasks
# TASK 2 — Detecting Data Leaks Using SQL Injection Protection

## Overview
A secure cloud-based API system developed using Flask to protect user data against SQL Injection attacks.

The system uses AES-based encryption, secure parameterized SQL queries, and capability-code authentication to provide double-layer security for sensitive user information.

The API is deployed on the cloud using Render and tested using Postman.

---

## Features
- SQL Injection protection
- AES-based password encryption
- Secure login system
- Capability-code authentication
- Cloud deployment using Render
- REST API endpoints
- Postman API testing

---

## Technologies Used
- Python
- Flask
- SQLite
- Cryptography Library
- Render
- Postman

---

## How It Works
1. User sends data through API endpoints
2. System validates access using a secret capability code
3. Passwords are encrypted before storage
4. Parameterized SQL queries prevent SQL injection attacks
5. Users can securely log in using encrypted credentials
6. API is deployed on the cloud for remote access

---

## API Endpoints

### Add User
```http
POST /add_user
```

### Login User
```http
POST /login
```

---

## Security Features
- Parameterized SQL queries
- AES-based encryption
- Capability-code authentication
- Double-layer security mechanism
- Secure cloud deployment

---

## Deployment
Hosted on Render Cloud Platform.

---

## Postman Collection
The exported Postman API collection is included in this repository for testing the endpoints.

---

## Output Example

```bash
User added securely ✅
Login successful ✅
Access Denied ❌
Wrong password ❌
```
