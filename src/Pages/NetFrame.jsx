import Header from "../Components/Header";
import Footer from "../Components/Footer";
import work from "../images/work.webp";

const NetFrame = () => {
  return (
    <>
      <Header />

      {/* Heading */}
      <div
        style={{
          marginTop: "80px",
          padding: "30px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#0d6efd",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          .NET Framework Training
        </h1>

        <p
          style={{
            color: "#b0b0b0",
            fontSize: "18px",
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
          margin: "50px auto",
          padding: "0 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: "1 1 600px",
            minWidth: "320px",
          }}
        >
          <h2
            style={{
              color: "#0d6efd",
              marginBottom: "20px",
              fontSize: "32px",
            }}
          >
            About the Course
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#ffffff",
              lineHeight: "1.9",
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
            flex: "1 1 450px",
            minWidth: "320px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={work}
            alt=".NET Framework"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "380px",
              objectFit: "contain",
              borderRadius: "15px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NetFrame;