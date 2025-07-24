const express = require("express");
const app = express();
const contactSechma = require("./connection/contact-sechma");
const ProductSechma = require("./connection/product-sechma");
var cors = require("cors");
console.log(contactSechma);

app.use(express.json()); // ✅ Parses incoming JSON
app.use(express.urlencoded({ extended: true })); // Optional, for form-encoded data

app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the server!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// Contact Form
app.post("/submit", (req, res) => {
  const { name, email, number, subject, message } = req.body;

  const sql =
    "INSERT INTO messages (name, email, number, subject, message) VALUES (?, ?, ?, ?, ?)";
    console.log("sql", sql);
    
  contactSechma.query(
    sql,
    [name, email, number, subject, message],
    (err, result) => {
      if (err) {

        console.error("Insert error:", err);
        return res.status(500).send("Error saving message");
      }
      res.status(200).send("Message received");
    }
  );
});

// Product Form
app.post("/Product", (req, res) => {
  const { Productname, Color, Size, Aboutitem, Price, Quantity, Image, Status } = req.body;

  const sql =
    "INSERT INTO Products (Productname, Color, Size, Aboutitem, Price, Quantity, Image, Status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    console.log("sql", sql);
    
  ProductSechma.query(
    sql,
    [Productname, Color, Size, Aboutitem, Price, Quantity, Image, Status],
    (err, result) => {
      if (err) {

        console.error("Insert error:", err);
        return res.status(500).send("Error saving message");
      }
      res.status(200).send("Message received");
    }
  );
});

// Contact Form find
app.get("/find", (req, res) => {
  contactSechma.query("SELECT * FROM messages", (err, result) => {
    if (err) {
      console.error("Error fetching messages:", err);
      return res.status(500).send("Error fetching messages");
    }
    res.json(result);
  });
});

// Product Form find
app.get("/Productfind", (req, res) => {
  contactSechma.query("SELECT * FROM Products", (err, result) => {
    if (err) {
      console.error("Error fetching messages:", err);
      return res.status(500).send("Error fetching messages");
    }
    res.json(result);
  });
});

// Contact Form delete
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM messages WHERE id = ?";
  contactSechma.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Delete error:", err);
      return res.status(500).send("Failed to delete message");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Message not found");
    }

    res.status(200).send("Message deleted successfully");
  });
});
