const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "shirt",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");

  const createTable = `
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  number VARCHAR(20),
  subject VARCHAR(100),
  message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.query(createTable, (err) => {
    if (err) {
      console.error("Error creating messages table:", err);
      return;
    }
    console.log("Messages table ready");
  });
});

module.exports = db;
