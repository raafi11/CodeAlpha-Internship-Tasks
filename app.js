const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// DB Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql123", // replace this
    database: "bus_system"
});

db.connect(err => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("Database Connected");
    }
});

// Test route
app.get("/", (req, res) => {
    res.send("THIS IS THE NEW VERSION");
});

// DB test route
app.get("/test-db", (req, res) => {
    db.query("SELECT 1", (err, result) => {
        if (err) return res.send(err);
        res.send("DB Working ✅");
        console.log("Test route hit");
    });
});

// USER REGISTRATION
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
        (err, result) => {
            if (err) return res.send(err);
            res.send("User Registered");
        }
    );
});

// ADD BUS
app.post("/add-bus", (req, res) => {
    const { source, destination, price, seats } = req.body;

    db.query(
        "INSERT INTO buses (source, destination, price, seats_available) VALUES (?, ?, ?, ?)",
        [source, destination, price, seats],
        (err, result) => {
            if (err) return res.send(err);
            res.send("Bus Added");
        }
    );
});

// GET ALL BUSES
app.get("/buses", (req, res) => {
    db.query("SELECT * FROM buses", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

// BOOK TICKET
const { v4: uuidv4 } = require("uuid");

app.post("/book-ticket", (req, res) => {
    const { user_id, bus_id, seat_number } = req.body;

    // Check bus
    db.query("SELECT * FROM buses WHERE id = ?", [bus_id], (err, result) => {
        if (err) return res.send(err);

        const bus = result[0];

        if (!bus) return res.send("Bus not found");
        if (bus.seats_available <= 0) return res.send("No seats available");

        const ticketId = uuidv4();
        const price = bus.price;

        // Insert ticket
        db.query(
            "INSERT INTO tickets (id, user_id, bus_id, seat_number, price) VALUES (?, ?, ?, ?, ?)",
            [ticketId, user_id, bus_id, seat_number, price],
            (err, result) => {
                if (err) return res.send(err);

                // Reduce seat count
                db.query(
                    "UPDATE buses SET seats_available = seats_available - 1 WHERE id = ?",
                    [bus_id]
                );

                res.send({
                    message: "Ticket Booked",
                    ticket_id: ticketId
                });
            }
        );
    });
});

// VIEW USER TICKETS
app.get("/my-tickets/:user_id", (req, res) => {
    const user_id = req.params.user_id;

    db.query(
        "SELECT * FROM tickets WHERE user_id = ?",
        [user_id],
        (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        }
    );
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});