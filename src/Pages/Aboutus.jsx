import Footer from "../Components/Footer";
import Header from "../Components/Header";
import aps from "../images/aps.jpg";
import aaa from "../images/aaa.png";

const Aboutus = () => {
  return (
    <>
      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, sans-serif;
        }

        body{
          background:#f5f7fb;
        }

        /* HERO SECTION */
        .about-hero{
          width:100%;
          padding:120px 8% 60px;
          background:linear-gradient(135deg,#0a2a66,#1e5eff);
          color:white;
          text-align:center;
        }

        .about-hero h1{
          font-size:48px;
          margin-bottom:15px;
        }

        .about-hero p{
          font-size:18px;
          color:#eaeaea;
          max-width:800px;
          margin:auto;
          line-height:1.7;
        }

        /* SECTION */
        .section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 80px 8%;
          gap: 40px;
          flex-wrap: wrap;
          background:white;
        }

        .section:nth-child(even){
          background:#f4f7fc;
        }

        .section img {
          width: 100%;
          max-width: 450px;
          border-radius: 15px;
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
        }

        .section-content {
          flex: 1;
          min-width: 280px;
        }

        .section-content h2 {
          font-size: 36px;
          color:#0a2a66;
          margin-bottom: 15px;
        }

        .section-content p {
          font-size: 17px;
          line-height: 1.8;
          color:#444;
        }

        /* FEATURE BOX */
        .features{
          padding:80px 8%;
          background:#0a2a66;
          color:white;
          text-align:center;
        }

        .features h2{
          font-size:40px;
          margin-bottom:40px;
        }

        .feature-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:25px;
        }

        .feature-card{
          background:rgba(255,255,255,0.1);
          padding:30px 20px;
          border-radius:15px;
          transition:0.3s;
        }

        .feature-card:hover{
          background:#00b894;
          transform:translateY(-8px);
        }

        .feature-card h3{
          margin-top:10px;
          font-size:20px;
        }

        /* RESPONSIVE */
        @media(max-width:768px){

          .about-hero h1{
            font-size:32px;
          }

          .section{
            padding:60px 5%;
            text-align:center;
          }

          .section-content h2{
            font-size:28px;
          }

        }

      `}</style>

      <Header />

      {/* HERO */}
      <div className="about-hero">
        <h1>About Apple Tree Infotech</h1>
        <p>
          We are a professional IT training institute providing industry-ready
          skills in programming, web development, design, and modern
          technologies with 100% practical learning.
        </p>
      </div>

      {/* ABOUT SECTION */}
      <div className="section">
        <img src={aaa} alt="About Us" />
        <div className="section-content">
          <h2>Who We Are</h2>
          <p>
            Apple Tree Infotech is dedicated to providing high-quality IT
            training with real-world projects. Our focus is to build strong
            technical skills and prepare students for IT industry careers.
            We believe in practical learning instead of only theory.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="section">
        <div className="section-content">
          <h2>Our Services</h2>
          <p>
            We offer training in Web Development, App Development, Python,
            Java, UI/UX Design, Digital Marketing, Data Science, and more.
            Our expert mentors guide students step by step with live projects
            and assignments.
          </p>
        </div>

        <img src={aps} alt="Our Services" />
      </div>

      {/* FEATURES */}
      <div className="features">
        <h2>Why Choose Us</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>✔ Practical Training</h3>
          </div>

          <div className="feature-card">
            <h3>✔ Expert Mentors</h3>
          </div>

          <div className="feature-card">
            <h3>✔ Live Projects</h3>
          </div>

          <div className="feature-card">
            <h3>✔ Placement Support</h3>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;