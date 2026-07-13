import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import datascience from "../../images/datascience.jpg";
import dataSciencePdf from "../../assets/datascience.pdf";

import "./DataScience.css";

const DataScience = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSyllabusForm, setShowSyllabusForm] = useState(false);

const [syllabusData, setSyllabusData] = useState({
  phone: "",
  email: "",
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
    course: "Data Science Training",
    message: "",
  });
};

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  course: "Data Science Training",
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
            course: "Data Science Training",
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
    
        link.href = datasciencePdf;
        link.download = "Data-Science.pdf";
    
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
  value={formData.course}
  readOnly
/>
      <textarea
        rows="3"
        placeholder="Message"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
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

      <div className="datascience-banner">
        <h1>Data Science Training</h1>
        <p>Become a Professional Data Scientist</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={datascience} alt="Data Science Training" />
          </div>

          <div className="course-content">

            <h2>About Data Science Course</h2>

            <p>
              Learn Data Science from beginner to advanced level.
              This course covers Python, Statistics, Data Analysis,
              Data Visualization, Machine Learning, Artificial Intelligence,
              Pandas, NumPy, Power BI and real-world projects.
              Gain industry-ready skills for high-demand data careers.
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
              <p>Introduction to Data Science</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Python Programming</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>NumPy & Pandas</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Data Cleaning</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Data Visualization</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>Statistics for Data Science</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Machine Learning Basics</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Artificial Intelligence</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Power BI Dashboard</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live Data Science Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              Data Scientist
            </div>

            <div className="career-card">
              Data Analyst
            </div>

            <div className="career-card">
              Machine Learning Engineer
            </div>

            <div className="career-card">
              Business Analyst
            </div>

            <div className="career-card">
              AI Engineer
            </div>

            <div className="career-card">
              Data Engineer
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default DataScience;