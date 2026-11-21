import { useState, useEffect } from "react";
import API_BASE_URL from "../api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("feedbacks");
  const [feedbacks, setFeedbacks] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [syllabusRequests, setSyllabusRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  // Fetch all data from backend APIs
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [fbRes, enRes, sylRes] = await Promise.all([
        fetch(`${API_BASE_URL}/feedbacks`).then((r) => r.json()).catch(() => ({ data: [] })),
        fetch(`${API_BASE_URL}/enrollments`).then((r) => r.json()).catch(() => ({ data: [] })),
        fetch(`${API_BASE_URL}/syllabus-requests`).then((r) => r.json()).catch(() => ({ data: [] }))
      ]);

      setFeedbacks(Array.isArray(fbRes?.data) ? fbRes.data : []);
      setEnrollments(Array.isArray(enRes?.data) ? enRes.data : []);
      setSyllabusRequests(Array.isArray(sylRes?.data) ? sylRes.data : []);
    } catch (err) {
      console.error("Error loading dashboard data:", err);
      setError("Failed to fetch latest data. Please click Refresh.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CSV Export utility
  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert("No data available to export");
      return;
    }
    const headers = Object.keys(data[0]);
    const csvRows = [
      headers.join(","),
      ...data.map((row) =>
        headers.map((field) => `"${String(row[field] || "").replace(/"/g, '""')}"`).join(",")
      )
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtering
  const filterList = (list) => {
    if (!searchTerm) return list;
    const term = searchTerm.toLowerCase();
    return list.filter((item) =>
      Object.values(item).some((val) => String(val).toLowerCase().includes(term))
    );
  };

  const filteredFeedbacks = filterList(feedbacks);
  const filteredEnrollments = filterList(enrollments);
  const filteredSyllabus = filterList(syllabusRequests);

  return (
    <>
      <Header />
      <div style={{ minHeight: "85vh", backgroundColor: "#f8f9fa", paddingTop: "140px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          
          {/* HEADER & METRICS */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "25px", gap: "15px" }}>
            <div>
              <h1 style={{ fontSize: "28px", color: "#800000", fontWeight: "700", marginBottom: "5px" }}>
                Admin Portal & Submissions
              </h1>
              <p style={{ color: "#666", fontSize: "14px" }}>
                View, monitor, and export all student inquiries, feedback, and enrollments in real time.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={fetchData}
                style={{
                  backgroundColor: "#800000",
                  color: "#fff",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                🔄 Refresh
              </button>
            </div>
          </div>

          {/* STATS CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px", marginBottom: "30px" }}>
            <div
              onClick={() => setActiveTab("feedbacks")}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
                borderLeft: activeTab === "feedbacks" ? "5px solid #800000" : "5px solid #ddd"
              }}
            >
              <div style={{ fontSize: "13px", color: "#888", fontWeight: "600", textTransform: "uppercase" }}>Total Feedbacks</div>
              <div style={{ fontSize: "28px", fontWeight: "700", color: "#800000", marginTop: "5px" }}>{feedbacks.length}</div>
            </div>

            <div
              onClick={() => setActiveTab("enrollments")}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
                borderLeft: activeTab === "enrollments" ? "5px solid #28a745" : "5px solid #ddd"
              }}
            >
              <div style={{ fontSize: "13px", color: "#888", fontWeight: "600", textTransform: "uppercase" }}>Course Enrollments</div>
              <div style={{ fontSize: "28px", fontWeight: "700", color: "#28a745", marginTop: "5px" }}>{enrollments.length}</div>
            </div>

            <div
              onClick={() => setActiveTab("syllabus")}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
                borderLeft: activeTab === "syllabus" ? "5px solid #007bff" : "5px solid #ddd"
              }}
            >
              <div style={{ fontSize: "13px", color: "#888", fontWeight: "600", textTransform: "uppercase" }}>Syllabus Requests</div>
              <div style={{ fontSize: "28px", fontWeight: "700", color: "#007bff", marginTop: "5px" }}>{syllabusRequests.length}</div>
            </div>
          </div>

          {/* CONTROLS (TABS, SEARCH, EXPORT) */}
          <div style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
              
              {/* TABS */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button
                  onClick={() => setActiveTab("feedbacks")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: activeTab === "feedbacks" ? "#800000" : "#f1f3f5",
                    color: activeTab === "feedbacks" ? "#fff" : "#495057"
                  }}
                >
                  📝 Feedbacks ({feedbacks.length})
                </button>

                <button
                  onClick={() => setActiveTab("enrollments")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: activeTab === "enrollments" ? "#800000" : "#f1f3f5",
                    color: activeTab === "enrollments" ? "#fff" : "#495057"
                  }}
                >
                  🎓 Enrollments ({enrollments.length})
                </button>

                <button
                  onClick={() => setActiveTab("syllabus")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: activeTab === "syllabus" ? "#800000" : "#f1f3f5",
                    color: activeTab === "syllabus" ? "#fff" : "#495057"
                  }}
                >
                  📖 Syllabus Requests ({syllabusRequests.length})
                </button>
              </div>

              {/* SEARCH & EXPORT */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <input
                  type="text"
                  placeholder="🔍 Search entries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border: "1px solid #ced4da",
                    fontSize: "14px",
                    outline: "none",
                    minWidth: "220px"
                  }}
                />
                <button
                  onClick={() => {
                    if (activeTab === "feedbacks") exportToCSV(feedbacks, "apple-tree-feedbacks");
                    else if (activeTab === "enrollments") exportToCSV(enrollments, "apple-tree-enrollments");
                    else exportToCSV(syllabusRequests, "apple-tree-syllabus-requests");
                  }}
                  style={{
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer"
                  }}
                >
                  📥 Export CSV
                </button>
              </div>
            </div>

            {/* CONTENT AREA */}
            {loading ? (
              <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
                <div style={{ fontSize: "20px", marginBottom: "10px" }}>⏳ Loading records...</div>
              </div>
            ) : error ? (
              <div style={{ textAlign: "center", padding: "30px", color: "#dc3545", backgroundColor: "#fff5f5", borderRadius: "8px" }}>
                {error}
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                {/* 1. FEEDBACKS TABLE */}
                {activeTab === "feedbacks" && (
                  filteredFeedbacks.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
                      No feedback submissions found.
                    </div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#f8f9fa", borderBottom: "2px solid #dee2e6" }}>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>#</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Full Name</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Email</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Mobile</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>College / Branch</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Topic</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Message</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFeedbacks.map((fb, idx) => (
                          <tr key={fb.id || idx} style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "12px 10px", fontWeight: "600", color: "#800000" }}>{fb.id || idx + 1}</td>
                            <td style={{ padding: "12px 10px", fontWeight: "600" }}>{fb.fullName || "-"}</td>
                            <td style={{ padding: "12px 10px" }}><a href={`mailto:${fb.email}`} style={{ color: "#007bff", textDecoration: "none" }}>{fb.email || "-"}</a></td>
                            <td style={{ padding: "12px 10px" }}><a href={`tel:${fb.mobile}`} style={{ color: "#28a745", textDecoration: "none" }}>{fb.mobile || "-"}</a></td>
                            <td style={{ padding: "12px 10px" }}>{fb.college || "-"} {fb.branch ? `(${fb.branch})` : ""}</td>
                            <td style={{ padding: "12px 10px" }}><span style={{ backgroundColor: "#e8f4fd", color: "#007bff", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500" }}>{fb.feedbackPoint || "General"}</span></td>
                            <td style={{ padding: "12px 10px", maxWidth: "250px", wordBreak: "break-word" }}>{fb.message || "-"}</td>
                            <td style={{ padding: "12px 10px", color: "#888", fontSize: "12px" }}>{fb.createdAt ? new Date(fb.createdAt).toLocaleDateString() : "Recent"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )
                )}

                {/* 2. ENROLLMENTS TABLE */}
                {activeTab === "enrollments" && (
                  filteredEnrollments.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
                      No enrollment inquiries found.
                    </div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#f8f9fa", borderBottom: "2px solid #dee2e6" }}>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>#</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Student Name</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Phone</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Email</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Interested Course</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Message</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredEnrollments.map((en, idx) => (
                          <tr key={en.id || idx} style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "12px 10px", fontWeight: "600", color: "#28a745" }}>{en.id || idx + 1}</td>
                            <td style={{ padding: "12px 10px", fontWeight: "600" }}>{en.name || "-"}</td>
                            <td style={{ padding: "12px 10px" }}><a href={`tel:${en.phone}`} style={{ color: "#28a745", textDecoration: "none" }}>{en.phone || "-"}</a></td>
                            <td style={{ padding: "12px 10px" }}><a href={`mailto:${en.email}`} style={{ color: "#007bff", textDecoration: "none" }}>{en.email || "-"}</a></td>
                            <td style={{ padding: "12px 10px" }}><span style={{ backgroundColor: "#eafaf1", color: "#28a745", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500" }}>{en.course || "-"}</span></td>
                            <td style={{ padding: "12px 10px", maxWidth: "250px", wordBreak: "break-word" }}>{en.message || "-"}</td>
                            <td style={{ padding: "12px 10px", color: "#888", fontSize: "12px" }}>{en.createdAt ? new Date(en.createdAt).toLocaleDateString() : "Recent"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )
                )}

                {/* 3. SYLLABUS REQUESTS TABLE */}
                {activeTab === "syllabus" && (
                  filteredSyllabus.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
                      No syllabus requests found.
                    </div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#f8f9fa", borderBottom: "2px solid #dee2e6" }}>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>#</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Phone Number</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Email Address</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Requested Course Syllabus</th>
                          <th style={{ padding: "12px 10px", color: "#495057" }}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredSyllabus.map((syl, idx) => (
                          <tr key={syl.id || idx} style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "12px 10px", fontWeight: "600", color: "#007bff" }}>{syl.id || idx + 1}</td>
                            <td style={{ padding: "12px 10px" }}><a href={`tel:${syl.phone}`} style={{ color: "#28a745", textDecoration: "none" }}>{syl.phone || "-"}</a></td>
                            <td style={{ padding: "12px 10px" }}><a href={`mailto:${syl.email}`} style={{ color: "#007bff", textDecoration: "none" }}>{syl.email || "-"}</a></td>
                            <td style={{ padding: "12px 10px" }}><span style={{ backgroundColor: "#eef2ff", color: "#4338ca", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500" }}>{syl.course || "-"}</span></td>
                            <td style={{ padding: "12px 10px", color: "#888", fontSize: "12px" }}>{syl.createdAt ? new Date(syl.createdAt).toLocaleDateString() : "Recent"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )
                )}

              </div>
            )}

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
