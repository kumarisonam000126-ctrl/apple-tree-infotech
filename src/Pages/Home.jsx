import { useNavigate } from "react-router-dom";
import "./Home.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import java1 from "../images/java1.jpg";
import php from "../images/php.webp";
import phy from "../images/phy.jpg";
import ccc from "../images/ccc.webp";
import dmt from "../images/dmt.webp";
import until from "../images/until.png";
import and from "../images/and.jpg";
import adi from "../images/adi.png";
import pss from "../images/pss.jpg";
import ado from "../images/ado.png";
import excel1 from "../images/excel1.png";
import angular from "../images/angular.jpg";
import ndc from "../images/ndc.png";
import rct from "../images/rct.png";
import dct from "../images/dct.webp";
import mnc from "../images/mnc.jpg";
import fico from "../images/fico.webp";
import sap from "../images/sap.jpg";
import aii from "../images/aii.jpg";
import erp from "../images/erp.jpg";
import ecom1 from "../images/ecom1.jpg";
import dnh from "../images/dnh.jpg";
import adv from "../images/adv.jpg";
import net from "../images/net.jpg";
import agentaii from "../images/agentaii.webp";
import cma from "../images/cma.jpg";


const Home = () => {
 const navigate = useNavigate();
  const courses = [
     {
    image: java1,
    title: "ULTIMATE JAVA",
    desc: "Object Oriented Programming",
    path: "/java"
  },
    {
      image: php,
      title: "PHP WEB DEVELOPMENT",
      desc: "Dynamic Backend Development",
      path: "/php"
    },
    {
      image: phy,
      title: "PYTHON PROGRAMMING",
      desc: "AI, ML & Web Development",
      path: "/python"
    },
    {
      image: ccc,
      title: "C / C++",
      desc: "System & Game Programming",
      path: "/cpp"
    },
    {
      image: dmt,
      title: "DIGITAL MARKETING",
      desc: "SEO, Social Media & Ads",
      path: "/digital-marketing"

    },
    {
      image: until,
      title: "WEB DESIGNING",
      desc: "Modern Responsive Websites",
      path: "/web-designing"
    },
    {
      image: and,
      title: "ANDROID TRAINING",
      desc: "Android App Development",
      path: "/android"
    },
    {
      image: adi,
      title: "ADOBE ILLUSTRATOR",
      desc: "Creative Graphic Designing",
      path: "/illustrator"
    },
    {
      image: pss,
      title: "PHOTOSHOP TRAINING",
      desc: "Image Editing & Designing",
      path: "/photoshop"
    },
    {
      image: ado,
      title: "ADOBE ANIMATE",
      desc: "2D Animation & Motion Graphics",
      path:"/animate"
    },
    {
      image: excel1,
      title: "ADVANCE EXCEL",
      desc: "Professional Excel Skills",
      path: "/excel"
    },
    {
      image: angular,
      title: "ANGULAR JS",
      desc: "Frontend Web Framework",
      path: "/angular"
    },
    {
      image: ndc,
      title: "NODE JS",
      desc: "Backend JavaScript Runtime",
      path: "/nodejs"
    },
    {
      image: rct,
      title: "REACT JS",
      desc: "Modern UI Development",
      path: "/reactjs"
    },
    {
      image: dct,
      title: "DATA SCIENCE",
      desc: "Data Analytics & AI",
      path: "/data-science"
    },
    {
      image: mnc,
      title: "MACHINE LEARNING",
      desc: "AI Model Development",
       path: "/machine-learning"
    },
    {
      image: fico,
      title: "SAP FICO",
      desc: "Financial Accounting Training",
       path: "/courses/datascience",
        path: "/sap-fico"
    },
    {
      image: sap,
      title: "SAP ABAP",
      desc: "SAP Programming Language",
       path: "/courses/datascience",
        path: "/sap-abap"
    },
    {
      image: aii,
      title: "ARTIFICIAL INTELLIGENCE",
      desc: "Future AI Technologies",
       path: "/artificial-intelligence"
       
    },
    {
      image: erp,
      title: "TALLY ERP-9",
      desc: "Accounting Software Training",
       path: "/tally"
    },
    {
      image: ecom1,
      title: "E-COMMERCE",
      desc: "Online Business Development",
       path: "/ecommerce"
    },
    {
      image: dnh,
      title: "DOMAIN & HOSTING",
      desc: "Website Hosting Management",
       path: "/domain-hosting"
    },
    {
      image: adv,
      title: "ADVANCE SQL",
      desc: "Database Management",
       path: "/sql"
    },
    {
      image: net,
      title: "DOTNET TRAINING",
      desc: ".NET Application Development",
       path: "/dotnet"
    },
    { 
      image:agentaii,
      title: "PYTHON WITH GEN-AI , AGENTIC-AI TRAINING",
      desc: "PYTHON WITH GEN-AI , AGENTIC-AI",
       path: "/agentaii"

    },
    {
      image: cma,
      title: "CMAFoundation",
      desc:"CMAFoundation",
      path:"/cma-foundation"
    }
  ];

  return (
    <>
      <Header />

      <div className="home">

        <section className="hero">
          <div className="hero-content">
            <h1 className="typing-heading">
  Education is the <span>Most Powerful</span> Weapon
     </h1>
            <p>
              Welcome to Apple Tree Infotech —
              The Best IT Training Institute in Ghaziabad.
              Learn Programming, Web Development,
              Data Science, Artificial Intelligence,
              Digital Marketing and many more
              professional technologies with
              practical training and live projects.
            </p>
          </div>
        </section>

        <section className="about">
          <div className="about-container">

            <div className="about-text">
              <h2>About Apple Tree Infotech</h2>

              <p>
                Apple Tree Infotech is a leading
                professional training institute
                providing industry-level education
                in Programming, Web Development,
                Mobile App Development,
                Artificial Intelligence,
                Data Science and many more technologies.

                <br /><br />

                We focus on practical training,
                live projects and placement support
                to make students industry ready.
              </p>
            </div>

            <div className="about-box">
              <h3>Why Choose Us?</h3>

              <ul>
                <li>✔ 100% Practical Training</li>
                <li>✔ Live Projects</li>
                <li>✔ Expert Trainers</li>
                <li>✔ Placement Assistance</li>
                <li>✔ Modern Labs</li>
                <li>✔ Industry Certifications</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="courses">

          <div className="section-title">
            <h2>Popular Training Courses</h2>
            <p>Learn Latest Technologies with Experts</p>
          </div>

          <div className="courses-grid">

           {courses.map((course, index) => (
  <div
    className="course-card"
    key={index}
    onClick={() => navigate(course.path)}
    style={{ cursor: "pointer" }}
  >
    <img src={course.image} alt={course.title} />

    <div className="course-content">
      <h3>{course.title}</h3>
      <p>{course.desc}</p>
    </div>
  </div>
))}
          </div>

        </section>

        <section className="facts">

          <div className="facts-title">
            <h2>IMPORTANT FACTS</h2>
          </div>

          <div className="facts-grid">

            <div className="fact-box">
              <h1>100+</h1>
              <h3>Industrial Training</h3>
            </div>

            <div className="fact-box">
              <h1>150+</h1>
              <h3>Campus Training</h3>
            </div>

            <div className="fact-box">
              <h1>100+</h1>
              <h3>Corporate Training</h3>
            </div>

            <div className="fact-box">
              <h1>250+</h1>
              <h3>Completed Projects</h3>
            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default Home;