import Header from "../Components/Header";
import Footer from "../Components/Footer";
import work from "../images/work.webp";

const NetFrame = () => {
  return (
    <>
      <Header />

      <div style={{ minHeight: "100vh", background: "#0b1220", color: "#eaeaea", paddingTop: "95px", overflowX: "hidden" }}>
        {/* Heading */}
        <div
          style={{
            padding: "40px 20px 20px",
            textAlign: "center",
            background: "#0f172a",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h1
            style={{
              color: "#4da3ff",
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            .NET Framework Training
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(15px, 2.5vw, 18px)",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Become a Professional .NET Developer with practical training on C#,
            ASP.NET, MVC, SQL Server, Entity Framework and real-time industry
            projects.
          </p>
        </div>

        {/* About Section */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto 60px",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Left Side */}
          <div
            style={{
              flex: "1 1 320px",
              minWidth: "0",
            }}
          >
            <h2
              style={{
                color: "#4da3ff",
                marginBottom: "20px",
                fontSize: "clamp(22px, 4vw, 32px)",
              }}
            >
              About the Course
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#e2e8f0",
                lineHeight: "1.85",
                textAlign: "justify",
              }}
            >
              Our <strong>.NET Framework Training</strong> is designed for
              beginners as well as aspiring software developers who want to build
              modern desktop, web, and enterprise-level applications using
              Microsoft's powerful .NET technologies. Throughout this course you
              will gain hands-on experience with <strong>C# Programming</strong>,
              <strong> Object-Oriented Programming (OOP)</strong>,
              <strong> ASP.NET</strong>,
              <strong> ASP.NET MVC</strong>,
              <strong> Web Forms</strong>,
              <strong> Entity Framework</strong>, and
              <strong> SQL Server Database</strong>.
              <br />
              <br />
              Students will develop dynamic websites, secure web applications,
              REST APIs, and database-driven projects while following industry
              best practices. The training includes live coding sessions,
              assignments, mini projects, and a complete real-time project that
              helps build practical development skills.
              <br />
              <br />
              Along with technical knowledge, we also provide interview
              preparation, resume building, coding practice, certification, and
              placement assistance to help students confidently start their career
              as a .NET Developer.
            </p>
          </div>

          {/* Right Side Image */}
          <div
            style={{
              flex: "1 1 280px",
              minWidth: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={work}
              alt=".NET Framework"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                maxHeight: "380px",
                objectFit: "contain",
                borderRadius: "15px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NetFrame;
