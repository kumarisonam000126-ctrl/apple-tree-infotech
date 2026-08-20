import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

// IMAGES
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
import excel1 from "../images/excel.png";
import angular from "../images/angular.jpg";
import ndc from "../images/ndc.png";
import rct from "../images/rct.png";
import Dataa from "../images/Dataa.jpg";
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

import cmafoundation from "../images/cmafoundation.png"; 

const Popularcourses = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .pop {
          padding: 70px 0 20px;
          margin-top: 50px;
          text-align: center;
          color: darkblue;
          font-weight: bold;
        }

        .divider {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .line {
          width: 120px;
          height: 3px;
          background: darkblue;
        }

        .icon {
          margin: 0 10px;
          font-size: 22px;
        }

        .courses-section {
          padding: 50px 40px;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .courses-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          transition: 0.3s;
          text-align: center;
          cursor: pointer;
        }

        .courses-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .courses-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
        }

        .courses-card h3 {
          margin: 15px 0;
          color: darkblue;
        }

        .courses-card p {
          font-size: 14px;
          color: #333;
        }

        @media (max-width: 900px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Header />

      <div className="pop">
        <h2>POPULAR TRAINING COURSES</h2>
        <div className="divider">
          <span className="line"></span>
          <span className="icon">🎓</span>
          <span className="line"></span>
        </div>
      </div>

      <section className="courses-section">
        <div className="courses-grid">

          <div className="courses-card" onClick={() => navigate("/java")}>
            <img src={java1} alt="Java" />
            <h3>ULTIMATE JAVA</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/php")}>
            <img src={php} alt="PHP" />
            <h3>PHP WEB DEVELOPMENT</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/python")}>
            <img src={phy} alt="Python" />
            <h3>PYTHON PROGRAMMING</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/cpp")}>
            <img src={ccc} alt="C C++" />
            <h3>ADVANCED C++ PROGRAMMING</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/digital-marketing")}>
            <img src={dmt} alt="Digital Marketing" />
            <h3>Professional Digital Marketing</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/web-designing")}>
            <img src={until} alt="Web Design" />
            <h3>WEB DESIGN & DEVELOPMENT</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/android")}>
            <img src={and} alt="Android" />
            <h3>PROFESSIONAL ANDROID DEVELOPMENT</h3>
          </div>

         <div className="courses-card" onClick={() => navigate("/illustrator")}>
            <img src={adi} alt="Illustrator" />
            <h3>ADOBE ILLUSTRATOR TRAINING</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/photoshop")}>
            <img src={pss} alt="Photoshop" />
            <h3>PHOTO EDITING WITH PHOTOSHOP</h3>
          </div>

       <div className="courses-card" onClick={() => navigate("/animate")}>
            <img src={ado} alt="Animate" />
            <h3>ADOBE ANIMATE TRAINING</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/excel")}>
            <img src={excel1} alt="Excel" />
            <h3>ADVANCE EXCEL TRAINING</h3>
          </div>

        <div className="courses-card" onClick={() => navigate("/angular")}>
            <img src={angular} alt="Angular" />
            <h3>ANGULAR DEVELOPMENT</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/nodejs")}>
            <img src={ndc} alt="Node" />
            <h3>NODE JS DEVELOPMENT</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/reactjs")}>
            <img src={rct} alt="React" />
            <h3>MODERN REACT DEVELOPMENT</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/data-science")}>
            <img src={Dataa} alt="Data Science" />
            <h3>DATA SCIENCE & ANALYTICS</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/machine-learning")}>
            <img src={mnc} alt="ML" />
            <h3>Build Intelligent Systems with Machine Learning</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/sap-fico")}>
            <img src={fico} alt="SAP FICO" />
             <h3>SAP FICO </h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/sap-abap")}>
            <img src={sap} alt="SAP ABAP" />
            <h3>SAP ABAP</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/artificial-intelligence")}>
            <img src={aii} alt="AI" />
            <h3>ARTIFICIAL INTELLIGENCE</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/tally")}>
            <img src={erp} alt="Tally" />
            <h3>Tally ERP</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/ecommerce")}>
            <img src={ecom1} alt="Ecommerce" />
            <h3>E-COMMERCE</h3>
          </div>

         <div className="courses-card" onClick={() => navigate("/domain-hosting")}>
            <img src={dnh} alt="Domain Hosting" />
            <h3>DOMAIN & HOSTING</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/sql")}>
            <img src={adv} alt="SQL" />
            <h3>My SQL-Database</h3>
          </div>

          <div className="courses-card" onClick={() => navigate("/dotnet")}>
            <img src={net} alt=".NET" />
            <h3>Dot Net</h3>
          </div>

    
          <div
            className="courses-card"
            onClick={() => navigate("/agentaii")}>
            <img src={agentaii} alt="AGENTAI" />
            <h3>PYTHON WITH GEN-AI , AGENTIC-AI</h3>
            
          </div>

          <div
            className="courses-card"
            onClick={() => navigate("/cma-foundation")}>
            <img src={cmafoundation} alt="CMA Foundation" />
            <h3>CMA FOUNDATION</h3>
            
          </div>
         
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Popularcourses;