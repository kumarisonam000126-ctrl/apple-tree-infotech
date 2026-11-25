import Header from "../Components/Header";
import Footer from "../Components/Footer";
import wordd from "../images/wordd.png";

const Wordpress = () => {
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
            WordPress Development Training
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
              WordPress tutorial provides basic and advanced concepts of WordPress.
              Our WordPress tutorial is designed for beginners and professionals.
              WordPress is an open-source CMS (Content Management System) which is based
              on PHP and MySQL. Our WordPress tutorial includes all topics of WordPress such as
              installation, creating WordPress site, working on WordPress dashboard, creating and
              editing posts, pages and comments, working with themes and plugins, WordPress security,
              how to backup WordPress, and optimizing WordPress performance.
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
              src={wordd}
              alt="wordpress"
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

export default Wordpress;
