import Header from "../Components/Header";
import Footer from "../Components/Footer";
import laravel from "../images/laravel.png";

const Laravel = () => {
  return (
    <>
      <Header />

    
      <div
        style={{
          marginTop: "90px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>laravel</h1>
      </div>

    
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          padding: "50px",
          maxWidth: "1000px",
          margin: "0 auto",
          flexWrap: "wrap", 
        }}
      >
        
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <p style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "left" }}>
          <b> Well come to Apple Tree Infotech come with us,</b>
            
            We know that PHP is the oldest programming language used by the programmers, 
            and more than 20 million websites are developed by using PHP. PHP is a
             very suitable programming language as it satisfies the business requirements
              whether the business is big or small. Laravel is one of the most popular
               frameworks having a high rich set of functionalities. Laravel is provided
                with a well-defined toolbox 
            that allows the developers to write less code leading to less possibility of errors.

          </p>
        </div>

      
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <img
            src={laravel}
            alt="laravel"
            style={{ width: "100%", height:"400px", borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Laravel;
