import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import umsir from "../images/umsir.jpg";
import g1 from "../images/g1.jpeg";
import g2 from "../images/g2.jpeg";
import g3 from "../images/g3.jpeg";
import g4 from "../images/g4.jpeg";
import g5 from "../images/g5.jpeg";
import g6 from "../images/g6.jpeg";
import g7 from "../images/g7.jpeg";
import g8 from "../images/g8.jpeg";
import g9 from "../images/g9.jpeg";
import g10 from "../images/g10.jpeg";
import g11 from "../images/g11.jpeg";
import g12 from "../images/g12.jpeg";

const Gallery = () => {
  const images = [umsir,g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

  // Default Main Image
  const [mainImage, setMainImage] = useState(umsir);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          overflow-x:hidden;
        }

        .gallery{
          width:100%;
          min-height:100vh;
          background:#0f0f0f;
          padding-top:130px;
          padding-bottom:50px;
        }

       /* MAIN IMAGE */
       .main-image-container{
        width:92%;
        max-width:1400px;
        margin:auto;
        height:78vh;
        border-radius:25px;
        overflow:hidden;
        position:relative;
        background:#111;
        box-shadow:0 15px 40px rgba(0,0,0,0.5);
}

       .main-image{
        width:100%;
        height:100%;
        object-fit:cover;
        transition:all 0.5s ease-in-out;
}

/* Sirf portrait image ke liye */
.main-image.portrait{
  object-fit:contain;
  background:#111;
}
        /* DARK OVERLAY */
        .main-image-container::after{
          content:"";
          position:absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
          background:linear-gradient(
            to top,
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.1)
          );
        }

        /* MARQUEE SLIDER */
        .slider-wrapper{
          width:100%;
          overflow:hidden;
          margin-top:40px;
          position:relative;
        }

        .slider-track{
          display:flex;
          width:max-content;
          gap:22px;
          animation:scroll 28s linear infinite;
        }

        .slider-track:hover{
          animation-play-state:paused;
        }

        .thumb{
          width:240px;
          height:160px;
          border-radius:18px;
          overflow:hidden;
          flex-shrink:0;
          cursor:pointer;
          position:relative;
          transition:0.4s;
          border:3px solid transparent;
        }

        .thumb img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:0.5s;
        }

        .thumb:hover img{
          transform:scale(1.12);
        }

        .thumb:hover{
          transform:translateY(-5px);
          border-color:#ffffff;
          box-shadow:0 10px 25px rgba(255,255,255,0.15);
        }

        .active{
          border-color:#ffb400;
        }

        @keyframes scroll{
          0%{
            transform:translateX(0);
          }
          100%{
            transform:translateX(-50%);
          }
        }

        /* RESPONSIVE */

        @media(max-width:992px){

          .main-image-container{
            height:65vh;
          }

          .thumb{
            width:200px;
            height:135px;
          }
        }

        @media(max-width:768px){

          .gallery{
            padding-top:75px;
          }

          .main-image-container{
            width:94%;
            height:48vh;
            border-radius:18px;
          }

          .slider-wrapper{
            margin-top:25px;
          }

          .slider-track{
            gap:14px;
          }

          .thumb{
            width:160px;
            height:100px;
            border-radius:12px;
          }
        }

        @media(max-width:480px){

          .main-image-container{
            height:36vh;
          }

          .thumb{
            width:130px;
            height:85px;
          }
        }
      `}</style>

      <Header />

      <section className="gallery">

        {/* MAIN IMAGE */}
        <div className="main-image-container">
          <img src={mainImage} alt="gallery"
          className={`main-image ${mainImage === umsir ? "portrait" : ""}`}/>
        </div>

        {/* AUTO MOVING MARQUEE SLIDER */}
        <div className="slider-wrapper">
          <div className="slider-track">

            {images.concat(images).map((img, index) => (
              <div
                className={`thumb ${
                  mainImage === img ? "active" : ""
                }`}
                key={index}
                onMouseEnter={() => setMainImage(img)}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`gallery-${index}`} />
              </div>
            ))}

          </div>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Gallery;