import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/appletree.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <style>{`
/* RESET & BASE */
.top-marquee-strip {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 35px;
  background: #800000;
  color: #ffffff;
  z-index: 1002;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 0 10px;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}

/* HEADER BAR */
.main-header {
  position: fixed;
  top: 35px;
  left: 0;
  width: 100%;
  height: 75px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1001;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
}

/* LOGO */
.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image {
  height: 52px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.logo-container:hover .logo-image {
  transform: scale(1.03);
}

/* DESKTOP NAVIGATION */
.desktop-nav {
  display: flex;
  gap: 28px;
  align-items: center;
}

.desktop-nav a,
.desktop-dropbtn {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  padding: 6px 0;
  transition: color 0.2s ease;
  background: none;
  border: none;
  font-family: inherit;
}

.desktop-nav a:hover,
.desktop-dropbtn:hover {
  color: #800000;
}

.desktop-nav a::after,
.desktop-dropbtn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2.5px;
  background-color: #800000;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.desktop-nav a:hover::after,
.desktop-dropbtn:hover::after {
  width: 100%;
}

/* DESKTOP DROPDOWN */
.desktop-dropdown {
  position: relative;
  display: inline-block;
}

.desktop-dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  min-width: 230px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 8px 0;
  z-index: 1003;
  border: 1px solid rgba(0,0,0,0.06);
}

.desktop-dropdown-content a {
  color: #333333;
  padding: 10px 18px;
  display: block;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.desktop-dropdown-content a:hover {
  background: #fdf2f2;
  color: #800000;
  padding-left: 22px;
}

.desktop-dropdown:hover .desktop-dropdown-content {
  display: block;
  animation: fadeInDown 0.2s ease forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* HAMBURGER TOGGLE BUTTON */
.mobile-hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: #f4f6f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px;
  gap: 5px;
  z-index: 1005;
  transition: background 0.2s;
}

.mobile-hamburger:hover {
  background: #e2e8f0;
}

.hamburger-line {
  width: 22px;
  height: 2.5px;
  background-color: #800000;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* ANIMATED HAMBURGER TO 'X' */
.mobile-hamburger.open .hamburger-line:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.mobile-hamburger.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-hamburger.open .hamburger-line:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* BACKDROP OVERLAY */
.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 999;
}

.mobile-overlay.active {
  display: block;
}

/* MOBILE DRAWER MENU */
.mobile-drawer {
  display: none;
  position: fixed;
  top: 95px; /* 35px marquee + 60px header */
  left: 0;
  width: 100%;
  max-height: calc(100vh - 95px);
  background: #ffffff;
  overflow-y: auto;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  border-bottom: 3px solid #800000;
  padding: 15px 0 25px;
}

.mobile-drawer.active {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.mobile-drawer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.mobile-drawer-links li {
  border-bottom: 1px solid #f1f5f9;
}

.mobile-drawer-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.mobile-drawer-links a:active,
.mobile-drawer-links a:hover {
  background: #fdf2f2;
  color: #800000;
}

/* MOBILE DROPDOWN ACCORDION */
.mobile-dropdown-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
}

.mobile-dropdown-toggle:active,
.mobile-dropdown-toggle:hover {
  background: #fdf2f2;
  color: #800000;
}

.arrow-icon {
  font-size: 12px;
  transition: transform 0.3s ease;
  color: #64748b;
}

.arrow-icon.open {
  transform: rotate(180deg);
  color: #800000;
}

.mobile-submenu {
  display: none;
  background: #f8fafc;
  padding: 6px 0;
  border-left: 4px solid #800000;
  margin: 0 15px 10px 22px;
  border-radius: 0 6px 6px 0;
}

.mobile-submenu.open {
  display: block;
}

.mobile-submenu a {
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  display: block;
}

.mobile-submenu a:hover,
.mobile-submenu a:active {
  color: #800000;
  background: #f1f5f9;
  padding-left: 22px;
}

/* MOBILE CONTACT STRIP */
.mobile-contact-bar {
  padding: 15px 22px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-call-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #800000;
  color: #ffffff !important;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(128, 0, 0, 0.25);
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 900px) {
  .top-marquee-strip {
    height: 32px;
    font-size: 12px;
  }

  .main-header {
    top: 32px;
    height: 62px;
    padding: 0 18px;
  }

  .logo-image {
    height: 44px;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-hamburger {
    display: flex;
  }

  .mobile-drawer {
    display: block;
    top: 94px; /* 32px + 62px */
    max-height: calc(100vh - 94px);
  }
}

@media (max-width: 480px) {
  .main-header {
    padding: 0 14px;
  }

  .logo-image {
    height: 40px;
  }
}
      `}</style>

      {/* TOP MARQUEE BANNER */}
      <div className="top-marquee-strip">
        <marquee direction="left" scrollamount="5">
          Welcome to Apple Tree Infotech | Call for any Course Enquiry: 7503962162 | Admissions Open for New Batches
        </marquee>
      </div>

      {/* FIXED NAVBAR */}
      <header className="main-header">
        {/* LOGO */}
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img className="logo-image" src={logo} alt="Apple Tree Infotech" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>

          {/* DESKTOP DROPDOWN */}
          <div className="desktop-dropdown">
            <span className="desktop-dropbtn">Industrial Training ▾</span>
            <div className="desktop-dropdown-content">
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

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          className={`mobile-hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      {/* BACKDROP OVERLAY FOR MOBILE */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* MOBILE DRAWER NAVIGATION */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-drawer-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              <span>🏠 Home</span>
            </Link>
          </li>

          <li>
            <Link to="/aboutus" onClick={closeMenu}>
              <span>ℹ️ About Us</span>
            </Link>
          </li>

          {/* ACCORDION DROPDOWN FOR INDUSTRIAL TRAINING */}
          <li>
            <button
              className="mobile-dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>💼 Industrial Training</span>
              <span className={`arrow-icon ${dropdownOpen ? "open" : ""}`}>
                ▼
              </span>
            </button>

            <div className={`mobile-submenu ${dropdownOpen ? "open" : ""}`}>
              <Link to="/spring" onClick={closeMenu}>
                • Spring / Hibernate
              </Link>
              <Link to="/netframe" onClick={closeMenu}>
                • .NET Framework
              </Link>
              <Link to="/codeigniter" onClick={closeMenu}>
                • CodeIgniter
              </Link>
              <Link to="/laravel" onClick={closeMenu}>
                • Laravel
              </Link>
              <Link to="/django" onClick={closeMenu}>
                • Django
              </Link>
              <Link to="/wordpress" onClick={closeMenu}>
                • WordPress
              </Link>
            </div>
          </li>

          <li>
            <Link to="/courses" onClick={closeMenu}>
              <span>🎓 Popular Courses</span>
            </Link>
          </li>

          <li>
            <Link to="/gallery" onClick={closeMenu}>
              <span>🖼️ Gallery</span>
            </Link>
          </li>

          <li>
            <Link to="/feedback" onClick={closeMenu}>
              <span>📝 Feedback</span>
            </Link>
          </li>
        </ul>

        {/* QUICK CALL ACTION */}
        <div className="mobile-contact-bar">
          <a href="tel:7503962162" className="mobile-call-btn">
            📞 Call Now: 7503962162
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
