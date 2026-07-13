import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import webdesign from "../../images/webdesign.jpg";
import webDesignPdf from "../../assets/webdesigning.pdf";

import "./WebDesigning.css";

const WebDesigning = () => {
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
  course: "Web Designing Training",
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
    course: "Web Designing Training",
    message: "",
  });
};

 const handleSyllabusDownload = () => {
  if (!syllabusData.phone || !syllabusData.email) {
    alert("Please enter Phone Number and Email");
    return;
  }

  const link = document.createElement("a");

  link.href = webDesignPdf;
  link.download = "web-designing-syllabus.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("Syllabus Downloaded Successfully");

  setShowSyllabusForm(false);

  setSyllabusData({
    phone: "",
    email: "",
  });
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
      <div className="wd-banner">
        <h1>Web Designing Training</h1>
        <p>Learn Modern Website Design & UI Development</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={webdesign} alt="Web Designing Training" />
          </div>

          <div className="course-content">

            <h2>About Web Designing Course</h2>

            <p>
              Learn professional website designing from beginner
              to advanced level. This course covers HTML, CSS,
              JavaScript, Bootstrap, Responsive Design, UI/UX
              Principles, Website Layout Design and Live Projects.
              Build attractive and modern websites with practical training.
            </p>

            <div className="btn-group">

              <button  className="btn"
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
              <p>Introduction to Web Designing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>HTML5 Fundamentals</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>CSS3 Styling</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Responsive Design</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Bootstrap Framework</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>JavaScript Basics</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>UI / UX Design Concepts</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Website Layout Design</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Landing Page Design</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live Website Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              Web Designer
            </div>

            <div className="career-card">
              UI Designer
            </div>

            <div className="career-card">
              Frontend Developer
            </div>

            <div className="career-card">
              UI/UX Designer
            </div>

            <div className="career-card">
              Website Creator
            </div>

            <div className="career-card">
              Freelance Designer
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default WebDesigning;