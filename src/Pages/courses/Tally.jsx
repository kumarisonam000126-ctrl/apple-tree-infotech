import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import tally from "../../images/tally.png";
import tallyPdf from "../../assets/tally.pdf";

import "./Tally.css";

const Tally = () => {
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
  course: "Tally, Excel Training",
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
    course: "Tally, Excel Training",
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
                    course: "Tally Excel Training",
                  }),
                });
            
                if (!res.ok) {
                  throw new Error("Backend Error");
                }
            
                // WhatsApp Message
                const whatsappMessage = `
            New Syllabus Download
            
            Course: Tally Excel

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
            
                link.href = tallyPdf;
                link.download = "Tally Excel.pdf";
            
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

      <div className="tally-banner">
        <h1>Tally Prime Training</h1>
        <p>Master Accounting, GST & Business Management</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img
              src={tally}
              alt="Tally Training"
            />
          </div>

          <div className="course-content">

            <h2>About Tally Course</h2>

            <p>
              Learn Tally Prime from beginner to advanced level.
              This course covers Accounting Fundamentals,
              GST, Inventory Management, Payroll Management,
              Banking, Taxation, Financial Reports and
              real-world business accounting practices.
            </p>

            <div className="btn-group">

              <button className="btn"
                onClick={() => setShowForm(true)}>
                    Enroll Now
              </button>
             <button className="btn btn-secondary"
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
              <p>Introduction to Tally Prime</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Company Creation</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>Ledger & Voucher Entry</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Inventory Management</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>GST Configuration</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>GST Returns</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Payroll Management</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Banking Transactions</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Financial Statements</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live Accounting Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              Accountant
            </div>

            <div className="career-card">
              GST Executive
            </div>

            <div className="career-card">
              Accounts Executive
            </div>

            <div className="career-card">
              Finance Assistant
            </div>

            <div className="career-card">
              Tax Consultant
            </div>

            <div className="career-card">
              Tally Operator
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Tally;