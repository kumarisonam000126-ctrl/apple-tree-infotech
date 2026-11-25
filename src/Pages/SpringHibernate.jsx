import Header from "../Components/Header";
import Footer from "../Components/Footer";
import hiber from "../images/hiber.jpg";

const SpringHibernate = () => {
  return (
    <>
      <Header />

      <div style={{ minHeight: "100vh", background: "#0b1220", color: "#eaeaea", paddingTop: "95px", overflowX: "hidden" }}>
        {/* Page Heading */}
        <div
          style={{
            padding: "40px 20px",
            textAlign: "center",
            background: "#0f172a",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 38px)",
              color: "#4da3ff",
              marginBottom: "12px",
              fontWeight: "700",
            }}
          >
            Spring & Hibernate Training
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2.5vw, 18px)",
              color: "#cbd5e1",
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
            padding: "40px 20px",
          }}
        >
          {/* About Section */}
          <h2
            style={{
              color: "#4da3ff",
              marginBottom: "20px",
              fontSize: "clamp(22px, 4vw, 30px)",
            }}
          >
            About Spring & Hibernate Course
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.85",
              textAlign: "justify",
              color: "#e2e8f0",
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
              fontSize: "16px",
              lineHeight: "1.85",
              textAlign: "justify",
              color: "#e2e8f0",
              marginTop: "18px",
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
              fontSize: "16px",
              lineHeight: "1.85",
              textAlign: "justify",
              color: "#e2e8f0",
              marginTop: "18px",
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
              alignItems: "center",
              gap: "40px",
              marginTop: "45px",
              flexWrap: "wrap",
            }}
          >
            {/* Left Side */}
            <div
              style={{
                flex: "1 1 300px",
                maxWidth: "650px",
                width: "100%",
              }}
            >
              <h3
                style={{
                  color: "#4da3ff",
                  marginBottom: "20px",
                  fontSize: "clamp(22px, 3.5vw, 28px)",
                  fontWeight: "700",
                }}
              >
                Course Highlights
              </h3>

              <ul
                style={{
                  fontSize: "16px",
                  lineHeight: "2",
                  color: "#e2e8f0",
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

            {/* Right Side Image */}
            <div
              style={{
                flex: "1 1 280px",
                maxWidth: "500px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={hiber}
                alt="Spring Hibernate"
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  height: "auto",
                  maxHeight: "380px",
                  objectFit: "contain",
                  borderRadius: "15px",
                  background: "#fff",
                  padding: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpringHibernate;
