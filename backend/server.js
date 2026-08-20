const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db"); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

// HEALTH CHECK ROUTE
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Apple Tree Infotech Backend API is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// SAVE FEEDBACK API
app.post("/feedback", (req, res) => {
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
        console.error("Error saving feedback:", err);
        return res.status(500).json({
          success: false,
          message: "Error saving feedback"
        });
      }

      res.json({
        success: true,
        message: "Feedback submitted successfully"
      });
    }
  );
});

// SAVE SYLLABUS REQUEST API
app.post("/syllabus", (req, res) => {
  const { phone, email, course, Course } = req.body;
  const courseName = course || Course || "";

  const sql = `
    INSERT INTO syllabus_requests
    (phone, email, course)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [phone, email, courseName], (err) => {
    if (err) {
      console.error("Error saving syllabus request:", err);
      return res.status(500).json({
        success: false,
        message: "Error saving syllabus request",
      });
    }

    res.json({
      success: true,
      message: "Syllabus request saved successfully",
    });
  });
});

// SAVE ENROLLMENT API
app.post("/enroll", (req, res) => {
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
        console.error("Error saving enrollment:", err);
        return res.status(500).json({
          success: false,
          message: "Error saving enrollment",
        });
      }

      res.json({
        success: true,
        message: "Enrollment submitted successfully",
      });
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});