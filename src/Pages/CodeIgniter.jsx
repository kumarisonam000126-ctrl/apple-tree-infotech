import Header from "../Components/Header";
import Footer from "../Components/Footer";
import cold from "../images/cold.png";

const CodeIgniter = () => {
  return (
    <>
      <Header />

      <div style={{ minHeight: "100vh", paddingTop: "95px", overflowX: "hidden" }}>
        <div
          style={{
            padding: "40px 20px 20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "clamp(26px, 5vw, 38px)", color: "#0d6efd", fontWeight: "700" }}>
            CodeIgniter Training
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            padding: "30px 20px 60px",
            maxWidth: "1000px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 300px", minWidth: "0" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "left", color: "#333" }}>
              <b style={{ color: "#0d6efd", display: "block", marginBottom: "10px", fontSize: "18px" }}>
                Welcome to Apple Tree Infotech,
              </b>
              For building a web application you spend a lot of time writing the same code again and again.
              Frameworks provide you a starting block and minimize the amount of code needed to build a website.
              CodeIgniter is a PHP-driven framework that simplifies the PHP code and brings out a fully interactive,
              dynamic website in much less time. CodeIgniter contains libraries, simple interface and logical structure
              to access these libraries, plugins, helpers, and other resources to build fast, robust, and scalable web applications.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 300px",
              minWidth: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={cold}
              alt="CodeIgniter"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                maxHeight: "350px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CodeIgniter;
