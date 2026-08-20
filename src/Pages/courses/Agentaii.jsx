import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import agentaii from "../../images/agentaii.webp";
import agenticPdf from "../../assets/agentic.pdf";
 import "./AgentAI.css";
const Agentaii = () => {
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
  course: "Python with Gen AI Agent",
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
         Course: "Python with Gen AI Agent",
       }),
     });
 
     if (!res.ok) {
       throw new Error("Backend Error");
     }
 
     // WhatsApp Message
     const whatsappMessage = `
 New Syllabus Download
 
 course: "Python with Gen AI Agent"

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
 
     link.href = agentaiPdf;
     link.download = "Python-GenAI-Agent-Syllabus.pdf";
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
 
     alert("Syllabus Downloaded Successfully");
 
     setShowSyllabusForm(false);
 
     setSyllabusData({
       name: "",
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

      <button onClick={() => setShowSyllabusForm(false)}>
        Close
      </button>

    </div>
  </div>
)}

      {/* BANNER */}
      <div className="android-banner">
    <h1>Python with Gen AI Agent Training</h1>
     <p>Build Intelligent AI Agents using Python & Generative AI</p>
   </div>
      <div className="course-page">

        <div className="course-box">

          <div className="course-img">
           <img src={agentaii} alt="Python with Gen AI Agent Training" />
         </div>
          <div className="course-content">

            <h2>About Python with Gen AI Agent Course</h2>

              <p>
                 Learn Python programming with Generative AI and build intelligent AI Agents
                 using OpenAI APIs, LangChain, Prompt Engineering, Vector Databases, RAG,
                 Automation, and real-world AI projects. This course covers everything from
                 Python basics to advanced AI application development. 
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

            <div className="syllabus-card"><h3>Module 1</h3><p>Python Fundamentals</p></div>
            <div className="syllabus-card"><h3>Module 2</h3><p>Object-Oriented Programming</p></div>
            <div className="syllabus-card"><h3>Module 3</h3><p>Data Structures & File Handling</p></div>
            <div className="syllabus-card"><h3>Module 4</h3><p>Generative AI Fundamentals</p></div>
            <div className="syllabus-card"><h3>Module 5</h3><p>Prompt Engineering</p></div>
            <div className="syllabus-card"><h3>Module 6</h3><p>OpenAI API Integration</p></div>
            <div className="syllabus-card"><h3>Module 7</h3><p>LangChain Framework</p></div>
            <div className="syllabus-card"><h3>Module 8</h3><p>RAG & Vector Databases</p></div>
            <div className="syllabus-card"><h3>Module 9</h3><p>Building AI Agents</p></div>
            <div className="syllabus-card"><h3>Module 10</h3><p>Live Projects & Deployment</p></div>

          </div>

        </div>

        {/* CAREER */}
        <div className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-grid">

            <div className="career-card">Python Developer</div>
            <div className="career-card">Generative AI Engineer</div>
            <div className="career-card">AI Agent Developer</div>
            <div className="career-card">LLM Application Developer</div>
            <div className="career-card">Prompt Engineer</div>
            <div className="career-card">Machine Learning Engineer</div>
            <div className="career-card">AI Automation Developer</div>
            <div className="career-card">Freelance AI Developer</div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Agentaii;