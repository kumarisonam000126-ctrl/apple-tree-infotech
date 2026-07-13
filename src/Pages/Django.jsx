import Header from "../Components/Header";
import Footer from "../Components/Footer";
import django from "../images/django.png";

const Django = () => {
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
        <h1>Djnago</h1>
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
            
             Django Tutorial provides basic and advanced concepts of Django.
             Our Django Tutorial is designed for beginners and professionals both. 
             Django is a Web Application Framework which is used to develop web
              applications. Our Django Tutorial includes all topics of Django 
              such as introduction, features, installation, environment setup,
               admin interface, cookie, form validation, Model, Template Engine,
                Migration, MVT etc. All the topics are explained in detail so that
                 reader can get enought knowledge of Django. Django is a web application 
                 framework written in Python programming language. It is based on MVT
                  (Model View Template) design pattern. The Django is very demanding
                   due to its rapid development feature. It takes less time to build application after collecting client requirement.


          </p>
        </div>

      
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <img
            src={django}
            alt="django"
            style={{ width: "100%", height:"400px", borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Django;
