import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import php from "../../images/php.webp";
import phpPdf from "../../assets/php.pdf";

import "./Php.css";

const Php = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "PHP Web Development",
    message:"",
  });

  const [showSyllabusForm, setShowSyllabusForm] = useState(false);

 const [syllabusData, setSyllabusData] = useState({
 phone: "",
 email: "",
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
      // Backend call
      const res = await fetch("http://localhost:5000/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Backend error");

      // WhatsApp message
     const message = `
New Enrollment:

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

      // reset form
      setFormData({
  name: "",
  phone: "",
  email: "",
  course: "PHP Web Development",
  message: "",
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

            <h2>Enquiry Form</h2>

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
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
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
  placeholder="Enter Message"
  rows="4"
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

      {/* BANNER */}
      <div className="php-banner">
        <h1>PHP Web Development Training</h1>
        <p>Master Backend Development with PHP & MySQL</p>
      </div>

      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
            <img src={php} alt="PHP Training" />
          </div>

          <div className="course-content">

            <h2>About PHP Course</h2>

            <p>
              Learn professional PHP Web Development with practical training and live projects.
              This course covers PHP, MySQL, CRUD Operations, Authentication Systems, APIs
              and complete dynamic website development.
            </p>

            <div className="btn-group">

              {/* ENROLL BUTTON */}
              <button
                className="btn"
                onClick={() => setShowForm(true)}
              >
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

            <div className="syllabus-card"><h3>Module 1</h3><p>Introduction to PHP</p></div>
            <div className="syllabus-card"><h3>Module 2</h3><p>PHP Variables</p></div>
            <div className="syllabus-card"><h3>Module 3</h3><p>Forms & Validation</p></div>
            <div className="syllabus-card"><h3>Module 4</h3><p>MySQL Database</p></div>
            <div className="syllabus-card"><h3>Module 5</h3><p>CRUD Operations</p></div>
            <div className="syllabus-card"><h3>Module 6</h3><p>Authentication System</p></div>
            <div className="syllabus-card"><h3>Module 7</h3><p>API Integration</p></div>
            <div className="syllabus-card"><h3>Module 8</h3><p>Live Project</p></div>

          </div>

        </div>

        {/* CAREER */}
        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">PHP Developer</div>
            <div className="career-card">Backend Developer</div>
            <div className="career-card">Full Stack Developer</div>
            <div className="career-card">Web Developer</div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Php;const handleSyllabusDownload = async () => {
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
                  course: "Php Development Training",
                }),
              });
          
              if (!res.ok) {
                throw new Error("Backend Error");
              }
          
              // WhatsApp Message
              const whatsappMessage = `
          New Syllabus Download
          
          Course: Php Development
          
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
          
              link.href = phpPdf;
              link.download = "Php-Devlopment.pdf";
          
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
