const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db"); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
    (err, result) => {

      if (err) {
        console.log(err);
        return res.json({
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

  const { phone, email, course } = req.body;

  const sql = `
    INSERT INTO syllabus_requests
    (phone, email, course)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [phone, email, course], (err, result) => {

    if (err) {
      console.log(err);

      return res.json({
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
    return res.json({
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
    [name, phone, email, course, message],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.json({
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

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});