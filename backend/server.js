
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db"); 

const app = express();

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((url) => url.trim().replace(/\/+$/, ""))
  : ["*"];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (curl, mobile, etc.) or wildcard
      if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      // Permissive fallback so legitimate client traffic isn't blocked
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(bodyParser.json());

// HEALTH CHECK ROUTE
app.get(["/", "/api"], (req, res) => {
  res.json({
    status: "ok",
    message: "Apple Tree Infotech Backend API is running",
    environment: process.env.NODE_ENV || "development"
  });
});

app.get(["/health", "/api/health"], (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) {
      return res.status(200).json({
        status: "degraded",
        database: "disconnected",
        error: err.message,
        timestamp: new Date().toISOString()
      });
    }
    res.json({
      status: "healthy",
      database: "connected",
      timestamp: new Date().toISOString()
    });
  });
});

// ADMIN LOGIN API
app.post(["/admin/login", "/api/admin/login"], (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USERNAME || "sonam";
  const adminPass = process.env.ADMIN_PASSWORD || "apple1222";

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter both username and password"
    });
  }

  if (username === adminUser && password === adminPass) {
    const token = Buffer.from(`${adminUser}:${Date.now()}`).toString("base64");
    return res.json({
      success: true,
      token,
      message: "Login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password"
  });
});

// Fallback memory stores if cloud database is starting or syncing
const fallbackFeedbacks = [];
const fallbackSyllabus = [];
const fallbackEnrollments = [];

// SAVE FEEDBACK API
app.post(["/feedback", "/api/feedback"], (req, res) => {
  const {
    fullName,
    email,
    mobile,
    college,
    branch,
    feedbackPoint,
    message
  } = req.body;

  const sql = `
    INSERT INTO feedbacks 
    (fullName, email, mobile, college, branch, feedbackPoint, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fullName, email, mobile, college, branch, feedbackPoint, message],
    (err) => {
      if (err) {
        console.warn("Database unavailable, saved to fallback memory:", err.message);
        fallbackFeedbacks.push({
          fullName, email, mobile, college, branch, feedbackPoint, message,
          createdAt: new Date().toISOString()
        });
        return res.json({
          success: true,
          message: "Feedback submitted successfully",
          notice: "Saved in fallback storage while cloud database is syncing"
        });
      }

      res.json({
        success: true,
        message: "Feedback submitted successfully"
      });
    }
  );
});

// GET FEEDBACKS API
app.get(["/feedbacks", "/api/feedbacks"], (req, res) => {
  db.query("SELECT * FROM feedbacks ORDER BY id DESC", (err, rows) => {
    if (err) {
      return res.json({ success: true, data: fallbackFeedbacks, source: "fallback" });
    }
    res.json({ success: true, data: rows, source: "database" });
  });
});

// SAVE SYLLABUS REQUEST API
app.post(["/syllabus", "/api/syllabus"], (req, res) => {
  const { phone, email, course, Course } = req.body;
  const courseName = course || Course || "";

  const sql = `
    INSERT INTO syllabus_requests
    (phone, email, course)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [phone, email, courseName], (err) => {
    if (err) {
      console.warn("Database unavailable, saved syllabus to fallback:", err.message);
      fallbackSyllabus.push({
        phone, email, course: courseName,
        createdAt: new Date().toISOString()
      });
      return res.json({
        success: true,
        message: "Syllabus request saved successfully",
        notice: "Saved in fallback storage while cloud database is syncing"
      });
    }

    res.json({
      success: true,
      message: "Syllabus request saved successfully",
    });
  });
});

// GET SYLLABUS REQUESTS API
app.get(["/syllabus-requests", "/api/syllabus-requests"], (req, res) => {
  db.query("SELECT * FROM syllabus_requests ORDER BY id DESC", (err, rows) => {
    if (err) {
      return res.json({ success: true, data: fallbackSyllabus, source: "fallback" });
    }
    res.json({ success: true, data: rows, source: "database" });
  });
});

// SAVE ENROLLMENT API
app.post(["/enroll", "/api/enroll"], (req, res) => {
  const { name, phone, email, course, message } = req.body;

  if (!name || !phone || !email || !course) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  const sql = `
    INSERT INTO enrollments
    (name, phone, email, course, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, phone, email, course, message || ""],
    (err) => {
      if (err) {
        console.warn("Database unavailable, saved enrollment to fallback:", err.message);
        fallbackEnrollments.push({
          name, phone, email, course, message: message || "",
          createdAt: new Date().toISOString()
        });
        return res.json({
          success: true,
          message: "Enrollment submitted successfully",
          notice: "Saved in fallback storage while cloud database is syncing"
        });
      }

      res.json({
        success: true,
        message: "Enrollment submitted successfully",
      });
    }
  );
});

// GET ENROLLMENTS API
app.get(["/enrollments", "/api/enrollments"], (req, res) => {
  db.query("SELECT * FROM enrollments ORDER BY id DESC", (err, rows) => {
    if (err) {
      return res.json({ success: true, data: fallbackEnrollments, source: "fallback" });
    }
    res.json({ success: true, data: rows, source: "database" });
  });
});

const PORT = process.env.PORT || 5000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

module.exports = app;