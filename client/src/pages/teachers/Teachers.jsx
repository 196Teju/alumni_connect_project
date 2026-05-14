import MainLayout from "../../layouts/MainLayout";
import { useTheme } from "../../context/ThemeContext";

const teachersData = [
  {
    name: "Dr. Ramesh Kumar",
    subject: "Computer Science",
    experience: "12 Years",
  },
  {
    name: "Mrs. Priya Sharma",
    subject: "Data Structures",
    experience: "8 Years",
  },
  {
    name: "Mr. Arjun Rao",
    subject: "Web Development",
    experience: "6 Years",
  },
];

const Teachers = () => {
  const { darkMode } = useTheme();

  return (
    <MainLayout>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* TITLE */}
        <h1
          style={{
            fontSize: "45px",
            marginBottom: "30px",
            color: "#3b82f6",
          }}
        >
          Teachers Network
        </h1>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {teachersData.map((teacher, index) => (
            <div
              key={index}
              style={{
                background: darkMode ? "#111827" : "#ffffff",
                padding: "25px",
                borderRadius: "18px",
                textAlign: "center",
                color: darkMode ? "white" : "black",
                border: darkMode
                  ? "1px solid #1e293b"
                  : "1px solid #e5e7eb",
                boxShadow: darkMode
                  ? "none"
                  : "0 4px 15px rgba(0,0,0,0.06)",
              }}
            >
              {/* PROFILE IMAGE */}
              <img
                src={`https://i.pravatar.cc/150?img=${index + 30}`}
                alt="teacher"
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />

              {/* NAME */}
              <h2
                style={{
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                {teacher.name}
              </h2>

              {/* SUBJECT */}
              <p
                style={{
                  color: darkMode ? "#9ca3af" : "#555",
                  marginBottom: "6px",
                }}
              >
                {teacher.subject}
              </p>

              {/* EXPERIENCE */}
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "15px",
                }}
              >
                {teacher.experience}
              </p>

              {/* BUTTON */}
              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Teachers;