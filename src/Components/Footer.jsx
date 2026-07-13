const Footer =()=>{
    return(
        <>
      <style>
        {`
        /* FOOTER */
        .footer {
          background: #0b1c3d;
          color: #fff;
          margin-top: 60px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          padding: 50px 40px;
        }

        .footer-box h3 {
          margin-bottom: 15px;
          color: #ffd700;
        }

        .footer-box p {
          font-size: 14px;
          line-height: 1.7;
          color: #ddd;
        }

        .footer-box ul {
          list-style: none;
          padding: 0;
        }

        .footer-box ul li {
          margin-bottom: 8px;
          font-size: 14px;
          cursor: pointer;
          color: #ddd;
        }

        .footer-box ul li:hover {
          color: #ffd700;
        }

        .footer-bottom {
          background: #061229;
          text-align: center;
          padding: 15px;
          font-size: 14px;
          color: #ccc;
        }
          .footer-nav {
  background-color: green;
  color: #ffffff;
  padding: 5px 2px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.footer-content p {
  margin: 2px 0;
  font-size: 14px;
}

.footer-content .developers span {
  color: orange;   
  font-weight: 500;
}

.footer-links {
  margin-top: 5px;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 13px;
  margin: 0 5px;
}

.footer-links a:hover {
  color: #38bdf8;
  text-decoration: underline;
}

.footer-links span {
  color: #94a3b8;
}

        `}
        </style> 

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-box">
              <h3>Apple Tree Infotech</h3>
              <p>
                Website, Software & App Development company with
                professional IT training services.
              </p>
            </div>

            <div className="footer-box">
              <h3>Get In Touch</h3>
              <p>📞 7503962162</p>
              <p>✉ hr@appletreeinfotech.in</p>
              <p>🌐 www.appletreeinfotech.in</p>
              <p>
                C-60 R.K Tower, 3rd Floor,<br />
                RDC Rajnagar, Ghaziabad – 201002
              </p>
            </div>

            <div className="footer-box">
              <h3>Useful Links</h3>
              <ul>
                <li>Our Courses</li>
                <li>Teachers & Staff</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            </div>

          <div className="footer-bottom">
            © 2025 Apple Tree Infotech | All Rights Reserved
          </div>
        </footer>
        <footer className="footer-nav">
  <div className="footer-content">
    <p>
      © 2015 Apple Tree Infotech. All Rights Reserved.
    </p>

    <p className="developers">
      Created & Developed by <span>Sonam </span>
    </p>

    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <span>|</span>
      <a href="#">Terms & Conditions</a>
    </div>
  </div>
</footer>
       
        </>
    )
}
export default Footer;