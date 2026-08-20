

import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import java1 from "../../images/java1.jpg";
import javaPdf from "../../assets/java.pdf";
import "./Java.css";

const Java = () => {
const [showForm, setShowForm] = useState(false);
const [showSyllabusForm, setShowSyllabusForm] = useState(false);

const [formData, setFormData] = useState({
name: "",
phone: "",
email: "",
course: "Ultimate Java Training",
message: "",
});

const [syllabusData, setSyllabusData] = useState({
phone: "",
email: "",
});

const handleSubmit = async () => {
try {
if (
!formData.name ||
!formData.phone ||
!formData.email
) {
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
  course: "Ultimate Java Training",
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
        course: "Ultimate Java Training",
      }),
    });

    if (!res.ok) {
      throw new Error("Backend Error");
    }

    // WhatsApp Message
    const whatsappMessage = `
New Syllabus Download

Course: Ultimate Java Training

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

    link.href = javaPdf;
    link.download = "Ultimate-Java-Syllabus.pdf";

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
<> <Header />


  {/* Enrollment Form */}

  {showForm && (
    <div className="form-overlay">
      <div className="form-box">

        <h2>Enquiry Form</h2>

        <input
          type="text"
          placeholder="Full Name"
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
          placeholder="Phone Number"
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
          placeholder="Email Address"
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
          placeholder="Message"
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

  {/* Syllabus Download Form */}

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

        <button
          onClick={() => setShowSyllabusForm(false)}
        >
          Close
        </button>

      </div>
    </div>
  )}

  <div className="java-banner">
    <h1>Ultimate Java Training</h1>
    <p>Become a Professional Java Developer</p>
  </div>

  <div className="course-page">

    <div className="course-box">

      <div className="course-img">
        <img src={java1} alt="Java Training" />
      </div>

      <div className="course-content">

        <h2>About Java Course</h2>

        <p>
          Learn Java from basic to advanced level with
          practical training and live projects.
          This course covers Core Java, Advanced Java,
          JDBC, Servlet, JSP, Spring Boot, Hibernate,
          MySQL and real-world application development.
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
          <p>Introduction to Java</p>
        </div>

        <div className="syllabus-card">
          <h3>Module 2</h3>
          <p>OOP Concepts</p>
        </div>

        <div className="syllabus-card">
          <h3>Module 3</h3>
          <p>Exception Handling</p>
        </div>

        <div className="syllabus-card">
          <h3>Module 4</h3>
          <p>Collections Framework</p>
        </div>

        <div className="syllabus-card">
          <h3>Module 5</h3>
          <p>JDBC & Database Connectivity</p>
        </div>

        <div className="syllabus-card">
          <h3>Module 6</h3>
          <p>Servlet & JSP</p>
        </div>

        <div className="syllabus-card">
          <h3>Module 7</h3>
          <p>Spring Boot Framework</p>
        </div>

        <div className="syllabus-card">
          <h3>Module 8</h3>
          <p>Hibernate ORM</p>
        </div>

      </div>

    </div>

    <div className="career-section">

      <h2>Career Opportunities</h2>

      <div className="career-grid">

        <div className="career-card">
          Java Developer
        </div>

        <div className="career-card">
          Backend Developer
        </div>

        <div className="career-card">
          Software Engineer
        </div>

        <div className="career-card">
          Full Stack Developer
        </div>

      </div>

    </div>

  </div>

  <Footer />
</>


);
};

export default Java;
