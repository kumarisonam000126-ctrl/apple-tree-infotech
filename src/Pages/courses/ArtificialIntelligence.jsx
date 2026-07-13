import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import ai from "../../images/aii.jpg";
import aiPdf from "../../assets/Artificial Intelligence.pdf";
import "./ArtificialIntelligence.css";

const ArtificialIntelligence = () => {
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
  course: "Artificial Intelligence Training",
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
      course: "Artificial Intelligence Training",
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
            course: "Artificial Intelligence Training",
          }),
        });
    
        if (!res.ok) {
          throw new Error("Backend Error");
        }
    
        // WhatsApp Message
        const whatsappMessage = `
    New Syllabus Download
    
    Course: Artificial Intelligence Training
    
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
    
        link.href = aiPdf;
        link.download = "Artificial-Intelligence-Syllabus.pdf";
    
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

      <div className="ai-banner">
        <h1>Artificial Intelligence Training</h1>
        <p>Build Intelligent Systems with AI Technologies</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img
              src={ai}
              alt="Artificial Intelligence Training"
            />
          </div>

          <div className="course-content">

            <h2>About Artificial Intelligence Course</h2>

            <p>
              Learn Artificial Intelligence from beginner to advanced level.
              This course covers AI Fundamentals, Machine Learning,
              Deep Learning, Neural Networks, Computer Vision,
              Natural Language Processing (NLP), Generative AI,
              Chatbots and real-world AI projects.
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
              <p>Introduction to AI</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Python for AI</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>Machine Learning Basics</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Deep Learning</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Neural Networks</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>Computer Vision</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Natural Language Processing</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Generative AI & ChatGPT</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>AI Model Deployment</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live AI Project</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              AI Engineer
            </div>

            <div className="career-card">
              Machine Learning Engineer
            </div>

            <div className="career-card">
              Data Scientist
            </div>

            <div className="career-card">
              NLP Engineer
            </div>

            <div className="career-card">
              AI Research Analyst
            </div>

            <div className="career-card">
              Computer Vision Engineer
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default ArtificialIntelligence;