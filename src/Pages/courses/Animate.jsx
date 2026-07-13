import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import animate from "../../images/ame.jpg";
import animatePdf from "../../assets/Adobe Animate.pdf";

import "./Animate.css";

const Animate = () => {
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
  course: "Adobe Animate Training",
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
    course: "Adobe Animate Training",
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
           course: "Adobe Animate Training",
         }),
       });
   
       if (!res.ok) {
         throw new Error("Backend Error");
       }
   
       // WhatsApp Message
       const whatsappMessage = `
   New Syllabus Download
   
   Course: Adobe Animate Training
   
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
   
       link.href = animatePdf;
       link.download = "Adobe-Animate-Syllabus.pdf";
   
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

      <button
        onClick={() => setShowForm(false)}
      >
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

      <div className="animate-banner">
        <h1>Adobe Animate Training</h1>
        <p>Learn Professional 2D Animation & Motion Graphics</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={animate} alt="Adobe Animate Training" />
          </div>

          <div className="course-content">

            <h2>About Adobe Animate Course</h2>

            <p>
              Learn Adobe Animate from beginner to advanced level.
              This course covers animation principles, character animation,
              motion graphics, interactive content creation, banner animations,
              cartoon animation and multimedia projects with practical training.
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
              <p>Introduction to Adobe Animate</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 2</h3>
              <p>Workspace & Tools</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 3</h3>
              <p>Drawing Techniques</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 4</h3>
              <p>Timeline Animation</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 5</h3>
              <p>Motion Tween & Shape Tween</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 6</h3>
              <p>Character Animation</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 7</h3>
              <p>Interactive Animation</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 8</h3>
              <p>Banner Animation</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 9</h3>
              <p>Motion Graphics Design</p>
            </div>

            <div className="syllabus-card">
              <h3>Module 10</h3>
              <p>Live Animation Projects</p>
            </div>

          </div>

        </div>

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">
              Animator
            </div>

            <div className="career-card">
              Motion Graphics Designer
            </div>

            <div className="career-card">
              Cartoon Animator
            </div>

            <div className="career-card">
              Multimedia Designer
            </div>

            <div className="career-card">
              Creative Designer
            </div>

            <div className="career-card">
              Freelance Animator
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Animate;