import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import sqlPdf from "../../assets/sql.pdf";
import sql from "../../images/sql.jpg";

import "./Sql.css";

const Sql = () => {
  
  const [showForm, setShowForm] = useState(false);
const [showSyllabusForm, setShowSyllabusForm] = useState(false);

const [syllabusData, setSyllabusData] = useState({
  phone: "",
  email: "",
});

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  course: "Sql Database Training",
  message: "",
});

const handleSubmit = async () => {
  try {
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    const res = await fetch("http://localhost:5000/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Backend Error");
    }

    const whatsappMessage = `
New Enrollment

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Course: ${formData.course}
Message: ${formData.message}
`;

    window.open(
      `https://wa.me/917503962162?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    alert("Enrollment Successful");

    setShowForm(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "SQL Database Training",
      message: "",
    });

  } catch (error) {
    console.log(error);
    alert("Something went wrong!");
  }
};

 const handleSyllabusDownload = async () => {
             if (!syllabusData.phone || !syllabusData.email) {
               alert("Please enter Phone Number and Email");
               return;
             }
           
             try {
               // Backend me data save karna
               const res = await fetch("http://localhost:5000/syllabus", {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                   phone: syllabusData.phone,
                   email: syllabusData.email,
                   course: "Sql Database Training",
                 }),
               });
           
               if (!res.ok) {
                 throw new Error("Backend Error");
               }
           
               // WhatsApp Message
               const whatsappMessage = `
           New Syllabus Download
           
           Course: Sql Database 
           Name: ${syllabusData.name}
           
           Phone: ${syllabusData.phone}
           
           Email: ${syllabusData.email}
           `;
           
               window.open(
                 `https://wa.me/917503962162?text=${encodeURIComponent(
                   whatsappMessage
                 )}`,
                 "_blank"
               );
           
               // PDF Download
               const link = document.createElement("a");
           
               link.href = sqlPdf;
               link.download = "Sql Database.pdf";
           
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
           
               alert("Syllabus Downloaded Successfully");
           
               setShowSyllabusForm(false);
           
               setSyllabusData({
                 name: "",
                 phone: "",
                 email: "",
               });
             } catch (error) {
               console.log(error);
               alert("Something went wrong!");
             }
           };
  return (
    <>
      <Header />
      {showForm && (
  <div className="form-overlay">
    <div className="form-box">

      <h2>Enrollment Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />

      <input
        type="text"
        value={formData.course}
        readOnly
      />

      <textarea
        placeholder="Enter Message"
        value={formData.message}
        onChange={(e) =>
          setFormData({
            ...formData,
            message: e.target.value,
          })
        }
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

      <button onClick={() => setShowForm(false)}>
        Close
      </button>

    </div>
  </div>
)}
 
 {showSyllabusForm && (
  <div className="form-overlay">
    <div className="form-box">

      <h2>Download Syllabus</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={syllabusData.name}
        onChange={(e) =>
          setSyllabusData({
            ...syllabusData,
            name: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={syllabusData.phone}
        onChange={(e) =>
          setSyllabusData({
            ...syllabusData,
            phone: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email Address"
        value={syllabusData.email}
        onChange={(e) =>
          setSyllabusData({
            ...syllabusData,
            email: e.target.value,
          })
        }
      />

      <button onClick={handleSyllabusDownload}>
        Download PDF
      </button>

      <button onClick={() => setShowSyllabusForm(false)}>
        Close
      </button>

    </div>
  </div>
)}

      <div className="sql-banner">
        <h1>SQL Database Training</h1>
        <p>Master Database Management & Query Language</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img
              src={sql}
              alt="SQL Training"
            />
          </div>

          <div className="course-content">

            <h2>About SQL Course</h2>

            <p>
              Learn SQL from beginner to advanced level.
              This course covers Database Concepts,
              SQL Queries, Joins, Constraints,
              Functions, Stored Procedures, Views,
              Triggers, Database Design and real-world projects.
              Become proficient in managing and analyzing data.
            </p>

            <div className="btn-group">

              <button className="btn"
  onClick={() => setShowForm(true)}>
  Enroll Now
</button>
              <button
  className="btn btn-secondary"
  onClick={() => setShowSyllabusForm(true)}>
  Download Syllabus
</button>
            </div>

          </div>

        </div>

        <div className="syllabus-section">

          <h2>Course Syllabus</h2>

          <div className="syllabus-grid">

            <div className="syllabus-card">
              <h3>Module 1</h3>
              <p>Introduction to Databases</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>SQL Basics</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>DDL Commands</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>DML Commands</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Joins & Relationships</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>Functions & Operators</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Views & Indexes</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Stored Procedures</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Triggers</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live Database Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              SQL Developer
            </div>

            <div className="career-card">
              Database Administrator
            </div>

            <div className="career-card">
              Data Analyst
            </div>

            <div className="career-card">
              Backend Developer
            </div>

            <div className="career-card">
              Database Engineer
            </div>

            <div className="career-card">
              Business Intelligence Analyst
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Sql;