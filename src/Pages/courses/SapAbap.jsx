import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import sapabap from "../../images/sap.jpg";
import sapabapPdf from "../../assets/sapabap.pdf";

import "./SapAbap.css";

const SapAbap = () => {
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
  course: "Sap Abap",
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
    course: "Sap Abap Coaching",
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
                  course: "SapAbap Development Training",
                }),
              });
          
              if (!res.ok) {
                throw new Error("Backend Error");
              }
          
              // WhatsApp Message
              const whatsappMessage = `
          New Syllabus Download
          
          Course: SapAbap Development
          
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
          
              link.href = sapabapPdf;
              link.download = "SapAbap.pdf";
          
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          
              alert("Syllabus Downloaded Successfully");
          
              setShowSyllabusForm(false);
          
              setSyllabusData({
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

      <div className="sapabap-banner">
        <h1>SAP ABAP Training</h1>
        <p>Master SAP Programming & Application Development</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img
              src={sapabap}
              alt="SAP ABAP Training"
            />
          </div>

          <div className="course-content">

            <h2>About SAP ABAP Course</h2>

            <p>
              Learn SAP ABAP from beginner to advanced level.
              This course covers Data Dictionary, Reports,
              Internal Tables, Smart Forms, Module Pool Programming,
              Enhancements, BAPI, ALV Reports and real-time SAP projects.
              Become an industry-ready SAP Technical Consultant.
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
              <p>Introduction to SAP & ABAP</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>ABAP Programming Basics</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>Data Dictionary</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Internal Tables</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Classical Reports</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>ALV Reports</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Smart Forms & Scripts</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Module Pool Programming</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>BAPI & Enhancements</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live SAP ABAP Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              SAP ABAP Developer
            </div>

            <div className="career-card">
              SAP Technical Consultant
            </div>

            <div className="career-card">
              SAP Programmer
            </div>

            <div className="career-card">
              ERP Developer
            </div>

            <div className="career-card">
              SAP Application Developer
            </div>

            <div className="career-card">
              SAP Solution Consultant
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default SapAbap;