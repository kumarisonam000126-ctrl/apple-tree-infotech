const mysql = require("mysql2");

// Determine SSL requirement (default to enabled in production or if DB_SSL is set)
const useSSL =
  process.env.DB_SSL === "true" ||
  (process.env.NODE_ENV === "production" && process.env.DB_HOST && process.env.DB_HOST !== "localhost" && process.env.DB_HOST !== "127.0.0.1");

const poolConfig = process.env.DATABASE_URL
  ? {
      uri: process.env.DATABASE_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      ssl: useSSL ? { rejectUnauthorized: false } : undefined
    }
  : {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "feedback_db",
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      ssl: useSSL ? { rejectUnauthorized: false } : undefined
    };

const db = mysql.createPool(poolConfig);

// Test pool connection
db.getConnection((err, connection) => {
  if (err) {
    console.warn("⚠️ Initial database connection notice:", err.message);
  } else {
    console.log("✅ MySQL Database Connected Successfully");
    connection.release();
  }
});

module.exports = db;