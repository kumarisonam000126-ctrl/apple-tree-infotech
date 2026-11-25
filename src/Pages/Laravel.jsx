import Header from "../Components/Header";
import Footer from "../Components/Footer";
import laravel from "../images/laravel.png";

const Laravel = () => {
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
            Laravel Framework Training
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
              PHP is one of the most widely used web programming languages in the world.
              Laravel is the premier, expressive PHP framework for web artisans.
              Laravel provides an elegant syntax, robust routing, ORM (Eloquent), authentication,
              caching, and queue management that allow developers to write clean, maintainable code.
              Our comprehensive course takes you from fundamental PHP to full-stack Laravel mastery
              with hands-on live project development.
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
              src={laravel}
              alt="Laravel"
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

export default Laravel;
