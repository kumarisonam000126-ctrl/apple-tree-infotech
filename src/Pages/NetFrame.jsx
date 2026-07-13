import Header from "../Components/Header";
import Footer from "../Components/Footer";
import work from "../images/work.webp"; 

const NetFrame = () => {
  return (
    <>
      <Header />

      
      <div style={{ marginTop: "70px", padding: "40px", textAlign: "center" }}>
        <h1 style={{ color: "darkgrey", marginBottom: "10px" }}>.NET Framework</h1>
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
            The .NET Framework course covers C#, ASP.NET, Web Forms, MVC, and real-time project development. 
            You will learn to build scalable enterprise applications with hands-on training and practical projects.
          </p>
        </div>

        
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <img
            src={work}
            alt=".NET Framework"
            style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NetFrame;
