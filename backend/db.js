const mysql = require("mysql");


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",       
  database: "feedback_db",
  connectionLimit: 10
});

// Check connection
db.getConnection((err, connection) => {
  if (err) {
    console.log("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Connected Successfully");
    connection.release();
  }
});

module.exports = db;