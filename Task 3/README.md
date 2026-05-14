# Bus Pass System 🚍☁️

A cloud-based Bus Ticket Booking and Management System developed using Node.js, Express.js, MySQL, and AWS EC2.

---

# 📌 Project Overview

This project simulates an online bus ticket booking backend system with:

- User management
- Bus management
- Ticket booking
- Seat availability tracking
- Cloud deployment
- Centralized database storage

The system was deployed on AWS EC2 to demonstrate scalability and cloud accessibility.

---

# 🛠️ Technologies Used

- JavaScript
- Node.js
- Express.js
- MySQL
- mysql2 package
- AWS EC2
- Git & GitHub
- PM2

---

# ☁️ Cloud Deployment

The backend application is deployed using AWS EC2 (`t3.micro` Free Tier instance).

Features demonstrated:
- Cloud hosting
- Remote accessibility
- Centralized database management
- Scalable backend architecture

---

# 📂 Project Structure

```text
Task3/
└── bus-pass-system
    ├── app.js
    ├── package.json
    ├── package-lock.json
    └── .gitignore
```

---

# ⚙️ Features

✅ User Management  
✅ Bus Management  
✅ Ticket Booking  
✅ Seat Availability Tracking  
✅ MySQL Database Integration  
✅ REST API Backend  
✅ AWS Cloud Deployment  
✅ Persistent Storage  

---

# 🗄️ Database Tables

## Users Table

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
```

---

## Buses Table

```sql
CREATE TABLE buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    source VARCHAR(100),
    destination VARCHAR(100),
    price INT,
    seats_available INT
);
```

---

## Tickets Table

```sql
CREATE TABLE tickets (
    id VARCHAR(255) PRIMARY KEY,
    user_id INT,
    bus_id INT,
    seat_number INT,
    price INT
);
```

---

# 🚀 Running the Project Locally

## 1. Clone Repository

```bash
git clone YOUR_REPOSITORY_LINK
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure MySQL

```sql
CREATE DATABASE bus_system;
```

Create the required tables.

---

## 4. Update Database Credentials

Inside `app.js`:

```js
const db = mysql.createConnection({
    host: "localhost",
    user: "bususer",
    password: "bus123",
    database: "bus_system"
});
```

---

## 5. Run Backend

```bash
node app.js
```

---

# 🌐 API Routes

## Root Route

```http
GET /
```

Response:

```text
THIS IS THE NEW VERSION
```

---

## Database Test Route

```http
GET /test-db
```

Response:

```text
DB Working ✅
```

---

# ☁️ AWS Deployment Steps

1. Launch EC2 Instance
2. Configure Security Group (Port 3000)
3. SSH into EC2
4. Install Node.js & MySQL
5. Clone GitHub repository
6. Run `npm install`
7. Configure MySQL database
8. Start backend using:

```bash
node app.js
```

---

# 🔧 PM2 Usage

```bash
sudo npm install -g pm2
pm2 start app.js
pm2 save
```

---

# 📈 Scalability Concepts

The system demonstrates:
- centralized cloud storage,
- scalable backend architecture,
- database persistence,
- remote accessibility.

Future scalability improvements:
- Load balancing
- AWS RDS integration
- Auto scaling
- Containerization

---

# 🧠 Concepts Learned

- Backend Development
- REST APIs
- MySQL Database Management
- Cloud Deployment
- AWS EC2 Usage
- Git & GitHub
- Linux Terminal Usage
- Debugging & Troubleshooting

---

# 🚧 Challenges Faced

- MySQL authentication issues
- Port configuration
- AWS SSH key permissions
- Git branch management
- Route debugging

---

# 🔮 Future Improvements

- Frontend UI
- Login Authentication
- QR Ticket Generation
- Payment Gateway Integration
- Email Notifications
- Mobile App Support

---

# 👨‍💻 Author

Graphic Designer & Developer  
Built as part of internship Task 3.
