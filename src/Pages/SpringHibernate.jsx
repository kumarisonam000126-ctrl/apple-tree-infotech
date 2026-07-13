import Header from "../Components/Header";
import Footer from "../Components/Footer";
import spring from "../images/spring.webp";

const SpringHibernate = () => {
  return (
    <>
      <Header />

    
      <div
        style={{
          marginTop: "70px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>Spring / Hibernate</h1>
      </div>

    
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          padding: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
          flexWrap: "wrap", 
        }}
      >
        
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <p style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "left" }}>
            This course covers Spring Core, Spring Boot, Hibernate ORM, and real-time projects. 
            You will get hands-on industrial-level training for web and enterprise applications.
          </p>
        </div>

      
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <img
            src={spring}
            alt="Spring Hibernate"
            style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpringHibernate;
