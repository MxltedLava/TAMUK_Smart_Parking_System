const mysql = require('mysql2');

// Create connection to the SQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user', // Replace with your DB username
  password: 'your_db_password', // Replace with your DB password
  database: 'users' // The name of your SQL database
});

// Check for connection errors
db.connect((err) => {
  if (err) {
    console.error('Connection error:', err.message);
    return;
  }
  console.log('Connected to the users SQL database.');
});

module.exports = db;
