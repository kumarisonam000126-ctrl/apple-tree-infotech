import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import phy from "../../images/phy.jpg";
import pythonPdf from "../../assets/python.pdf";

import "./Python.css";

const Python = () => {
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
  course: "Python Programming",
  message: "",
});

const handleSubmit = async () => {
  try {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.course
    ) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("http://localhost:5000/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Backend error");

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

    alert("Enrollment Successful!");
    setShowForm(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "Python Programming",
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
                  course: "Python Training",
                }),
              });
          
              if (!res.ok) {
                throw new Error("Backend Error");
              }
          
              // WhatsApp Message
              const whatsappMessage = `
          New Syllabus Download
          
          Course: Python Development
           
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
          
              link.href = pythonPdf;
              link.download = "Python.pdf";
          
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          
              alert("Syllabus Downloaded Successfully");
          
              setShowSyllabusForm(false);
          
              setSyllabusData({
                name:"",
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
        placeholder="Name"
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
        placeholder="Course Name"
        value={formData.course}
        onChange={(e) =>
          setFormData({ ...formData, course: e.target.value })
        }
      />

      <textarea
        placeholder="Enter Your Message"
        rows="5"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
      />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => setShowForm(false)}>Close</button>
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
        value={syllabusData.phone}
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

      <div className="python-banner">
        <h1>Python Programming Training</h1>
        <p>Learn Python for Web Development, AI & Data Science</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={phy} alt="Python Training" />
          </div>

          <div className="course-content">

            <h2>About Python Course</h2>

            <p>
              Learn Python Programming from basic to advanced level
              with practical training and live projects.
              This course covers Python Fundamentals,
              Object Oriented Programming, File Handling,
              Database Connectivity, Web Development,
              Data Science and Artificial Intelligence concepts.
            </p>

            <div className="btn-group">

              <button
             className="btn"
        onClick={() => setShowForm(true)}
      >
      Enroll Now
   </button>
              <button
  className="btn btn-secondary"
  onClick={() => setShowSyllabusForm(true)}
>
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
              <p>Introduction to Python</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Variables & Data Types</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>Control Statements</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Functions & Modules</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Object Oriented Programming</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>File Handling</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Database Connectivity</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Web Development with Django</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Data Science Basics</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Introduction to AI & ML</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              Python Developer
            </div>

            <div className="career-card">
              Data Analyst
            </div>

            <div className="career-card">
              Data Scientist
            </div>

            <div className="career-card">
              Machine Learning Engineer
            </div>

            <div className="career-card">
              Backend Developer
            </div>

            <div className="career-card">
              AI Engineer
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Python;