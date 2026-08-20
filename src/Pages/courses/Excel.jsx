import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import excel from "../../images/excel.png";
import excelPdf from "../../assets/excel.pdf";

import "./Excel.css";

const Excel = () => {
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
  course:"Excel Training",
  message: "",
});

const handleSubmit = () => {
  if (!formData.name || !formData.phone || !formData.email) {
    alert("Please fill all required fields");
    return;
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

  alert("Enrollment Submitted Successfully");
  setShowForm(false);

  setFormData({
    name: "",
    phone: "",
    email: "",
    course: "Excel Training",
    message: "",
  });
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
              course: "Excel Training",
            }),
          });
      
          if (!res.ok) {
            throw new Error("Backend Error");
          }
      
          // WhatsApp Message
          const whatsappMessage = `
      New Syllabus Download
      
      Course: Excel Training

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
      
          link.href = excelPdf;
          link.download = "excel.pdf";
      
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
        placeholder="full Name"
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

      <button
        onClick={() => setShowSyllabusForm(false)}
      >
        Close
      </button>

    </div>
  </div>
)}

      <div className="excel-banner">
        <h1>Microsoft Excel Training</h1>
        <p>Master Data Analysis & Office Productivity</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={excel} alt="Excel Training" />
          </div>

          <div className="course-content">

            <h2>About Excel Course</h2>

            <p>
              Learn Microsoft Excel from basic to advanced level.
              This course covers formulas, functions, charts,
              data analysis, pivot tables, dashboards, reporting,
              data validation and automation techniques used in
              professional offices and businesses.
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
              <p>Introduction to Excel</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Workbook & Worksheet Management</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>Formulas & Functions</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Charts & Graphs</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Conditional Formatting</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>Data Validation</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Pivot Tables</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Dashboard Creation</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Advanced Excel Functions</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live Reporting Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              Data Analyst
            </div>

            <div className="career-card">
              MIS Executive
            </div>

            <div className="career-card">
              Office Executive
            </div>

            <div className="career-card">
              Reporting Analyst
            </div>

            <div className="career-card">
              Operations Executive
            </div>

            <div className="career-card">
              Business Analyst
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Excel;