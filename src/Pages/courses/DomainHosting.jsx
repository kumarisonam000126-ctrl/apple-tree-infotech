import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import domainhosting from "../../images/domainhosting.jpg";

import "./DomainHosting.css";

const DomainHosting = () => {
  const [showForm, setShowForm] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  course: "Artificial Intelligence Training",
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
    course: "Domain Hosting Training",
    message: "",
  });
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

      <div className="domain-banner">
        <h1>Domain & Hosting Training</h1>
        <p>Learn Website Deployment & Server Management</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img
              src={domainhosting}
              alt="Domain and Hosting Training"
            />
          </div>

          <div className="course-content">

            <h2>About Domain & Hosting Course</h2>

            <p>
              Learn Domain Registration, Web Hosting,
              Website Deployment, cPanel Management,
              DNS Configuration, SSL Installation,
              Email Hosting, Cloud Hosting and Server Basics.
              This course helps students understand how websites
              go live on the internet and how to manage them professionally.
            </p>

            <div className="btn-group">

               <button className="btn"
  onClick={() => setShowForm(true)}>
  Enroll Now
</button>

              <button className="btn btn-secondary">
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
              <p>Introduction to Domain & Hosting</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Domain Registration Process</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>Types of Web Hosting</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>cPanel Management</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>DNS Configuration</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>SSL Certificate Setup</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Email Hosting Setup</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Website Deployment</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Cloud Hosting Basics</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live Website Hosting Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              Web Administrator
            </div>

            <div className="career-card">
              Hosting Support Engineer
            </div>

            <div className="career-card">
              Website Manager
            </div>

            <div className="career-card">
              Technical Support Executive
            </div>

            <div className="career-card">
              Server Administrator
            </div>

            <div className="career-card">
              Freelance Web Consultant
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default DomainHosting;