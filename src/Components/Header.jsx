import { Link } from "react-router-dom";
import logo from "../images/appletree.png";

const Header = () => {
  return (
    <>
      <style>{`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* MARQUEE TOP */
.marq {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  background: maroon;
  color: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  font-size: 14px;
}

/* HEADER */
.header {
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
  top: 35px;
  left: 0;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.logo-image {
  height: 55px;
  width: 55px;
}

.nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav a,
.dropbtn {
  color: maroon;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  cursor: pointer;
}

.nav a::after,
.dropbtn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background-color: rgba(128, 0, 0, 0.3);
  transition: 0.3s;
}

.nav a:hover::after,
.dropbtn:hover::after {
  width: 100%;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 30px;
  left: 0;
  background: white;
  min-width: 220px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  border-radius: 5px;
  z-index: 999;
}

.dropdown-content a {
  color: #333;
  padding: 10px 15px;
  display: block;
  font-size: 15px;
}

.dropdown-content a:hover {
  background: #f2f2f2;
  color: maroon;
}

.dropdown:hover .dropdown-content {
  display: block;
}
      `}</style>

      <div className="marq">
        <marquee direction="left" scrollamount="6">
          Welcome to Apple Tree Infotech | Call for any Course Enquiry:
          7503962162
        </marquee>
      </div>

      <header className="header">
        <div className="logo">
          <img className="logo-image" src={logo} alt="Logo" />
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>

          <Link to="/aboutus">About Us</Link>

          <div className="dropdown">
            <span className="dropbtn">
              Industrial Training ▾
            </span>

            <div className="dropdown-content">
              <Link to="/spring">Spring / Hibernate</Link>
              <Link to="/netframe">.NET Framework</Link>
              <Link to="/codeigniter">CodeIgniter</Link>
              <Link to="/laravel">Laravel</Link>
              <Link to="/django">Django</Link>
              <Link to="/wordpress">WordPress</Link>
            </div>
          </div>

          <Link to="/courses">Popular Courses</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/feedback">Feedback</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;