import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import android from "../../images/and.jpg";
import androidPdf from "../../assets/Android.pdf";

import "./Android.css";

const Android = () => {
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
  course: "Android App Development",
  message: "",
});


  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email) {
  alert("Please fill all required fields");
  return;
}
    try {
      // 1. SAVE TO BACKEND
      const res = await fetch("http://localhost:5000/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Backend Error");

      // 2. WHATSAPP MESSAGE
    const message = `
New Enrollment

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Course: ${formData.course}
Message: ${formData.message}
`;
      window.open(
        `https://wa.me/917503962162?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      alert("Enrollment Successful!");

      setShowForm(false);
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
         course: "Android App Training",
       }),
     });
 
     if (!res.ok) {
       throw new Error("Backend Error");
     }
 
     // WhatsApp Message
     const whatsappMessage = `
 New Syllabus Download
 
 Course: Android app Training
 
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
 
     link.href = androidPdf;
     link.download = "Android-App-Syllabus.pdf";
 
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

      {/* FORM POPUP */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-box">
            <h2>Enrollment Form</h2>

            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Phone"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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

      {/* BANNER */}
      <div className="android-banner">
        <h1>Android App Development Training</h1>
        <p>Build Professional Android Applications from Scratch</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={android} alt="Android Training" />
          </div>

          <div className="course-content">

            <h2>About Android Development Course</h2>

            <p>
              Learn Android App Development with practical training and live projects.
              This course covers Java, Kotlin, Android Studio, UI Design,
              Firebase, APIs, Database Integration and Play Store Deployment.
            </p>

            <div className="btn-group">

              {/* ENROLL BUTTON */}
              <button className="btn" onClick={() => setShowForm(true)}>
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

        {/* SYLLABUS */}
        <div className="syllabus-section">

          <h2>Course Syllabus</h2>

          <div className="syllabus-grid">

            <div className="syllabus-card"><h3>Module 1</h3><p>Introduction to Android</p></div>
            <div className="syllabus-card"><h3>Module 2</h3><p>Android Studio Setup</p></div>
            <div className="syllabus-card"><h3>Module 3</h3><p>Java & Kotlin Basics</p></div>
            <div className="syllabus-card"><h3>Module 4</h3><p>UI Design & Layouts</p></div>
            <div className="syllabus-card"><h3>Module 5</h3><p>Activities & Intents</p></div>
            <div className="syllabus-card"><h3>Module 6</h3><p>SQLite Database</p></div>
            <div className="syllabus-card"><h3>Module 7</h3><p>Firebase Integration</p></div>
            <div className="syllabus-card"><h3>Module 8</h3><p>REST API Integration</p></div>
            <div className="syllabus-card"><h3>Module 9</h3><p>User Authentication</p></div>
            <div className="syllabus-card"><h3>Module 10</h3><p>Play Store Deployment</p></div>

          </div>

        </div>

        {/* CAREER */}
        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">Android Developer</div>
            <div className="career-card">Mobile App Developer</div>
            <div className="career-card">Kotlin Developer</div>
            <div className="career-card">Java Developer</div>
            <div className="career-card">App Tester</div>
            <div className="career-card">Freelance App Developer</div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Android;