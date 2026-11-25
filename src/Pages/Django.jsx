import Header from "../Components/Header";
import Footer from "../Components/Footer";
import django from "../images/django.png";

const Django = () => {
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
            Django Framework Training
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
              Django Tutorial provides basic and advanced concepts of Django.
              Our Django training is designed for beginners and professionals both.
              Django is a high-level Python web framework that encourages rapid development
              and clean, pragmatic design. It is based on the MVT (Model View Template) design pattern.
              Our training covers introduction, environment setup, models, views, templates, forms,
              admin interface, authentication, REST APIs, and database migrations with real-time projects.
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
              src={django}
              alt="Django"
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

export default Django;
