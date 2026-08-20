import { useState } from "react";
import axios from "axios";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Feedback = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    feedbackPoint: "",
    message: ""
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/feedback",
        form
      );

      alert(res.data.message);

      if (res.data.success) {

        setForm({
          fullName: "",
          email: "",
          mobile: "",
          feedbackPoint: "",
          message: ""
        });

      }

    } catch (error) {

      alert("Server Error");

    }
  };

  return (
    <>

      {/* ================= CSS ================= */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, sans-serif;
        }

        body{
          background:#f4f7fc;
          overflow-x:hidden;
        }

        /* PAGE */
        .page{
          width:100%;
          min-height:100vh;
        }

        /* FEEDBACK SECTION */
        .feedback-section{
          width:100%;
          min-height:100vh;

          padding-top:120px; /* FIXED NAVBAR SPACE */
          padding-bottom:80px;
          padding-left:20px;
          padding-right:20px;

          display:flex;
          justify-content:center;
          align-items:center;

          background:
          linear-gradient(
            135deg,
            #0a2a66 0%,
            #1c4fa3 50%,
            #00b894 100%
          );
        }

        /* CONTAINER */
        .feedback-container{
          width:100%;
          max-width:1200px;

          background:rgba(255,255,255,0.15);

          backdrop-filter:blur(12px);

          border:1px solid rgba(255,255,255,0.25);

          border-radius:25px;

          padding:50px;

          box-shadow:0 15px 40px rgba(0,0,0,0.25);

          color:#fff;
        }

        /* HEADING */
        .feedback-heading{
          text-align:center;
          margin-bottom:40px;
        }

        .feedback-heading h1{
          font-size:42px;
          margin-bottom:12px;
          font-weight:700;
          letter-spacing:1px;
        }

        .feedback-heading p{
          font-size:17px;
          color:#f1f1f1;
        }

        /* FORM ROW */
        .form-row{
          display:flex;
          gap:25px;
          margin-bottom:22px;
        }

        /* FORM GROUP */
        .form-group{
          flex:1;
          display:flex;
          flex-direction:column;
        }

        .form-group label{
          margin-bottom:8px;
          font-size:15px;
          font-weight:600;
        }

        /* INPUTS */
        .form-group input,
        .form-group select,
        .form-group textarea{

          width:100%;

          padding:15px;

          border:none;

          border-radius:12px;

          background:rgba(255,255,255,0.9);

          font-size:15px;

          outline:none;

          transition:0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus{

          transform:translateY(-2px);

          box-shadow:0 5px 15px rgba(0,0,0,0.2);

        }

        /* TEXTAREA */
        .form-group textarea{
          height:150px;
          resize:none;
        }

        /* BUTTON */
        .submit-btn{

          width:100%;

          padding:16px;

          border:none;

          border-radius:12px;

          background:#ffffff;

          color:#0a2a66;

          font-size:18px;

          font-weight:bold;

          cursor:pointer;

          transition:0.3s;

          margin-top:10px;
        }

        .submit-btn:hover{

          background:#00e0a4;

          color:#fff;

          transform:scale(1.01);

        }

        /* FOOTER FIX */
        footer{
          width:100% !important;
        }

        /* RESPONSIVE */
        @media(max-width:992px){

          .feedback-container{
            padding:35px;
          }

          .feedback-heading h1{
            font-size:34px;
          }

        }

        @media(max-width:768px){

          .feedback-section{
            padding-top:100px;
            padding-left:15px;
            padding-right:15px;
          }

          .feedback-container{
            padding:25px;
            border-radius:18px;
          }

          .form-row{
            flex-direction:column;
            gap:18px;
            margin-bottom:18px;
          }

          .feedback-heading h1{
            font-size:28px;
          }

          .feedback-heading p{
            font-size:14px;
          }

          .submit-btn{
            font-size:16px;
            padding:14px;
          }

        }

        @media(max-width:480px){

          .feedback-container{
            padding:20px;
          }

          .feedback-heading h1{
            font-size:24px;
          }

        }

      `}</style>

      {/* ================= HEADER ================= */}

      <Header />

      {/* ================= PAGE ================= */}

      <div className="page">

        {/* FEEDBACK SECTION */}

        <section className="feedback-section">

          <div className="feedback-container">

            {/* HEADING */}

            <div className="feedback-heading">

              <h1>Feedback Form</h1>

              <p>
                We value your feedback. Share your experience with us.
              </p>

            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit}>

              {/* ROW 1 */}

              <div className="form-row">

                <div className="form-group">

                  <label>Full Name</label>

                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>

              {/* ROW 2 */}

              <div className="form-row">

                <div className="form-group">

                  <label>Mobile Number</label>

                  <input
                    type="text"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Feedback Category (10/10)</label>

                  <select name="feedbackPoint"
                    value={form.feedbackPoint}
                    onChange={handleChange}required>
                  <option value="">Select Rating</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
             </select>
                </div>

              </div>

              {/* MESSAGE */}

              <div className="form-group">

                <label>Your Message</label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your feedback here..."
                  required
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="submit-btn"
              >
                Submit Feedback
              </button>

            </form>

          </div>

        </section>

        {/* FOOTER */}

        <Footer />

      </div>

    </>
  );
};

export default Feedback;