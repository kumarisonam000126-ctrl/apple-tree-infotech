import Header from "../Components/Header";
import Footer from "../Components/Footer";
import cold from "../images/cold.png";

const CodeIgniter = () => {
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
        <h1>Codelgniter</h1>
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

            For building a web application you spend a lot of time in writing
             the same code again and again. Frameworks provide you a starting block and minimize the amount of code needed to build a website. CodeIgniter is PHP driven framework but it's not a PHP substitute. Diving into CodeIgniter doesn?t mean you are leaving PHP behind. PHP is a server-side scripting language for building dynamic web-based applications. CodeIgniter contains libraries, simple interface and logical structure to access these libraries, plug-ins, helpers and some other resources which solve the complex functions of PHP more easily maintaining a high performance. It simplifies the PHP code and brings out a fully interactive, dynamic website at a much shorter time. It supports PHP version of 5.2.6 or newer and MySQL version 4.1 or newer.
              It makes your web more robust and your code easier to read and maintain.
             It is a free toolkit, light weight and easier to install.
          </p>
        </div>

      
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <img
            src={cold}
            alt="codelgniter"
            style={{ width: "100%", height:"400px", borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CodeIgniter;
