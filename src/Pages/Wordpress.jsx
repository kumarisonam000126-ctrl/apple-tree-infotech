import Header from "../Components/Header";
import Footer from "../Components/Footer";
import wordd from "../images/wordd.png";

const Wordpress = () => {
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
        <h1>Wordpress</h1>
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
            
           WordPress tutorial provides basic and advanced concepts of WordPress.
            Our WordPress tutorial is designed for beginners and professionals. 
            WordPress is an open-source CMS (Content Management System) which is based
             on PHP and MySQL. Our WordPress tutorial includes all topics of WordPress such as installation, creating WordPress site, working on WordPress dashboard, creating and editing posts, pages and comments, working with themes and plugins, WordPress security, how to backup WordPress, optimizing WordPress performance.When Michel Valdrighi stopped updating b2, then Matt decided to fork the b2 software to do his blogging. He wrote a blog announcing to 
           fork b2 source-code, and got a reply from Mike Little stating that he is also interested in forking and would like to work with him.
          </p>
        </div>

      
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <img
            src={wordd}
            alt="wordpress"
            style={{ width: "550px", height:"400px", borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wordpress;
