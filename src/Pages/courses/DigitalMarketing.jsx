import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import dmt from "../../images/dmt.webp";
import digitalmarketingPdf from "../../assets/digitalmarketing.pdf";


import "./DigitalMarketing.css";

const DigitalMarketing = () => {
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
  course: "Digital Marketing Training",
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
            course: "Digital Marketing Training",
          }),
        });
    
        if (!res.ok) {
          throw new Error("Backend Error");
        }
    
        // WhatsApp Message
        const whatsappMessage = `
    New Syllabus Download
    
    Course: Data Science Training
    
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
    
        link.href = digitalmarketingPdf;
        link.download = "Digital-Marketing.pdf";
    
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

      <h2>Enquiry Form</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Course"
        value={formData.course}
        onChange={(e) =>
          setFormData({ ...formData, course: e.target.value })
        }
      />

      <textarea
        rows="3"
        placeholder="Message"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
      />

      <button
        onClick={() => {
          const whatsappMessage = `
*New Enrollment Request*

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
        }}
      >
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
      <div className="dm-banner">
        <h1>Digital Marketing Training</h1>
        <p>Become a Professional Digital Marketing Expert</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={dmt} alt="Digital Marketing Training" />
          </div>

          <div className="course-content">

            <h2>About Digital Marketing Course</h2>

            <p>
              Learn complete Digital Marketing with practical
              training and live projects. This course covers
              SEO, Social Media Marketing, Google Ads,
              Content Marketing, Email Marketing, YouTube Marketing,
              Affiliate Marketing and Analytics tools to help
              you build a successful digital career.
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
              <h3>Module 1</h3>
              <p>Introduction to Digital Marketing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Search Engine Optimization (SEO)</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>On-Page & Off-Page SEO</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Google Ads (PPC)</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Social Media Marketing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>Content Marketing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Email Marketing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>YouTube Marketing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Affiliate Marketing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Google Analytics & Reporting</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              SEO Executive
            </div>

            <div className="career-card">
              Digital Marketing Executive
            </div>

            <div className="career-card">
              Social Media Manager
            </div>

            <div className="career-card">
              Google Ads Specialist
            </div>

            <div className="career-card">
              Content Marketer
            </div>

            <div className="career-card">
              Digital Marketing Manager
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default DigitalMarketing;