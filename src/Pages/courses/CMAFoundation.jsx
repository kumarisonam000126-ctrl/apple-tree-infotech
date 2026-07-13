import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import cmafoundation from "../../images/cma.jpg";
import cmaFoundationPdf from "../../assets/Cma.pdf";

import "./CMAFoundation.css";

const CMAFoundation = () => {
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
  course: "CMA Foundation Coaching",
  message: "",
});

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
            course: "CMA FOUNDATION Training",
          }),
        });
    
        if (!res.ok) {
          throw new Error("Backend Error");
        }
    
        // WhatsApp Message
        const whatsappMessage = `
    New Syllabus Download
    
    Course: CMA FOUNDATION Training
    
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
    
        link.href = cmafoundationPdf;
        link.download = "CMA-Foundation-Syllabus.pdf";
    
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

      <button onClick={() => setShowSyllabusForm(false)}>
        Close
      </button>

    </div>
  </div>
)}

      <div className="cma-banner">
        <h1>CMA Foundation Coaching</h1>
        <p>Start Your Journey Towards Cost & Management Accounting</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={cmafoundation}
              alt="CMA Foundation Course"
            />
          </div>

          <div className="course-content">

            <h2>About CMA Foundation Course</h2>

            <p>
              CMA Foundation is the entry-level course for students
              aspiring to become Cost and Management Accountants.
              This course covers Fundamentals of Economics,
              Accounting, Laws, Ethics, Business Mathematics
              and Management concepts required for professional growth.
            </p>

            <div className="btn-group">

              <button
  className="btn"
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
              <h3>Paper 1</h3>
              <p>Fundamentals of Business Laws & Ethics</p>
            </div>

            <div className="syllabus-card">
              <h3>Paper 2</h3>
              <p>Fundamentals of Financial & Cost Accounting</p>
            </div>

            <div className="syllabus-card">
              <h3>Paper 3</h3>
              <p>Fundamentals of Business Mathematics & Statistics</p>
            </div>

            <div className="syllabus-card">
              <h3>Paper 4</h3>
              <p>Fundamentals of Business Economics & Management</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Benefits of CMA Foundation</h2>

          <div className="career-grid">

            <div className="career-card">
              Strong Accounting Base
            </div>

            <div className="career-card">
              Professional Qualification Path
            </div>

            <div className="career-card">
              Finance Career Opportunities
            </div>

            <div className="career-card">
              Management Skills
            </div>

            <div className="career-card">
              Industry Recognition
            </div>

            <div className="career-card">
              Higher Salary Potential
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default CMAFoundation;