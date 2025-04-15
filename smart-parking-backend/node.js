const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const app = express();

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'TAMUK_SMART_PARKING_SYSTEM',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route to handle user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password for security
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ error: 'Error hashing password' });
      return;
    }

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Failed to register user' });
        return;
      }
      res.status(200).json({ message: 'User registered successfully' });
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
