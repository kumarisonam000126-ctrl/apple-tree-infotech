import Header from "../Components/Header";
import Footer from "../Components/Footer";
import hiber from "../images/hiber.jpg";

const SpringHibernate = () => {
  return (
    <>
      <Header />

      {/* Page Heading */}
      <div
        style={{
          marginTop: "70px",
          padding: "40px",
          textAlign: "center",
          background: "#f8f9fa",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            color: "#0d6efd",
            marginBottom: "10px",
          }}
        >
          Spring & Hibernate Training
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Learn Java Enterprise Development with Spring Framework, Spring Boot,
          Hibernate ORM, REST APIs, Microservices, and Real-Time Projects.
          Become job-ready with industry-oriented practical training.
        </p>
      </div>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        {/* About Section */}
        <h2
          style={{
            color: "#0d6efd",
            marginBottom: "20px",
          }}
        >
          About Spring & Hibernate Course
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.9",
            textAlign: "justify",
            color: "white",
          }}
        >
          Spring & Hibernate is one of the most powerful and widely used Java
          technologies for developing secure, scalable, and enterprise-level web
          applications. This comprehensive training program is designed for
          beginners, students, and working professionals who want to build a
          successful career in Java Full Stack Development. Throughout the
          course, you will gain in-depth knowledge of Spring Framework, Spring
          Core, Spring Boot, Spring MVC, Dependency Injection (DI), Inversion of
          Control (IoC), Spring Security, Hibernate ORM, JPA, Maven, JDBC,
          RESTful Web Services, and MySQL Database Integration.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.9",
            textAlign: "justify",
            color: "white",
            marginTop: "20px",
          }}
        >
          The course emphasizes practical learning with hands-on coding,
          real-world assignments, live projects, interview preparation,
          debugging techniques, deployment concepts, and industry best
          practices. Students will learn how to build dynamic web applications,
          develop REST APIs, integrate databases, implement authentication and
          authorization, manage transactions, and optimize application
          performance using modern Java development tools.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.9",
            textAlign: "justify",
            color: "white",
            marginTop: "20px",
          }}
        >
          By the end of this training, you will be capable of developing
          complete enterprise applications using Spring Boot and Hibernate,
          connecting backend services with databases, creating scalable REST
          APIs, and working on real-time industry projects. Our expert trainers
          provide personalized guidance, coding practice, mock interviews,
          resume building support, certification assistance, and placement
          preparation to help students become confident Java developers.
        </p>

        {/* Course Highlights + Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >
         {/* Course Highlights Section */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "50px",
    flexWrap: "wrap",
    marginTop: "50px",
  }}
>
  {/* Course Highlights Section */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "50px",
    width: "100%",
    flexWrap: "nowrap", // Desktop me side by side
    marginTop: "50px",
  }}
>
  {/* Left Side */}
  <div
    style={{
      width: "60%",
    }}
  >
    <h3
      style={{
        color: "#0d6efd",
        marginBottom: "20px",
        fontSize: "32px",
        fontWeight: "700",
      }}
    >
      Course Highlights
    </h3>

    <ul
      style={{
        fontSize: "17px",
        lineHeight: "2",
        color: "white",
        paddingLeft: "20px",
      }}
    >
      <li>✔ Complete Spring Framework Training</li>
      <li>✔ Spring Core & Spring Boot</li>
      <li>✔ Spring MVC Architecture</li>
      <li>✔ Hibernate ORM & JPA</li>
      <li>✔ Dependency Injection (DI)</li>
      <li>✔ Inversion of Control (IoC)</li>
      <li>✔ Maven Project Management</li>
      <li>✔ JDBC & MySQL Database Integration</li>
      <li>✔ RESTful API Development</li>
      <li>✔ Spring Security Authentication</li>
      <li>✔ CRUD Application Development</li>
      <li>✔ Exception Handling & Validation</li>
      <li>✔ Live Industry Projects</li>
      <li>✔ Interview Preparation</li>
      <li>✔ Resume Building & Placement Assistance</li>
      <li>✔ Certificate After Course Completion</li>
    </ul>
  </div>

  {/* Right Side */}
 <div
  style={{
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <img
    src={hiber}
    alt="Spring Hibernate"
    style={{
      width: "600px",
      height: "450px",
      objectFit: "contain",
      borderRadius: "15px",
      background: "#fff",
      padding: "10px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      marginTop: "90px",
    }}
  />
</div>
</div>
</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpringHibernate;