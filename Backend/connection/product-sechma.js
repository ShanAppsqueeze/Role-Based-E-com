const mysql = require("mysql");

const Products_db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "shirt",
  user: "root",
  password: "",
});

Products_db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");

  const createTable = `
    CREATE TABLE IF NOT EXISTS Products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      Productname VARCHAR(255) NOT NULL,
      Color VARCHAR(100) NOT NULL,
      Size VARCHAR(50),
      Aboutitem TEXT NOT NULL,
      Price DECIMAL(10,2) NOT NULL,
      Quantity INT DEFAULT 0,
      Image VARCHAR(255),
      Status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  Products_db.query(createTable, (err) => {
    if (err) {
      console.error("Error creating Products table:", err);
      return;
    }
    console.log("Products table ready");
  });
});

module.exports = Products_db;
