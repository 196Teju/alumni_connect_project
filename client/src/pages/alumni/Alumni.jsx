import MainLayout from "../../layouts/MainLayout";
import { useTheme } from "../../context/ThemeContext";

const alumniData = [
  {
    name: "Rahul Kumar",
    role: "Software Engineer",
    company: "Google",
  },
  {
    name: "Priya Sharma",
    role: "Data Analyst",
    company: "Microsoft",
  },
  {
    name: "Arjun Reddy",
    role: "Cloud Engineer",
    company: "Amazon",
  },
];

const Alumni = () => {
  const { darkMode } = useTheme();

  return (
    <MainLayout>
      <h1
        style={{
          fontSize: "45px",
          marginBottom: "30px",
          color: "#3b82f6",
        }}
      >
        Alumni Network
      </h1>

      <input
        type="text"
        placeholder="Search alumni..."
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          background: darkMode ? "#1e293b" : "#e2e8f0",
          color: darkMode ? "white" : "black",
          marginBottom: "30px",
          outline: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
        }}
      >
        {alumniData.map((alumni, index) => (
          <div
            key={index}
            style={{
              background: darkMode ? "#111827" : "#ffffff",
              padding: "25px",
              borderRadius: "20px",
              color: darkMode ? "white" : "black",
              boxShadow: darkMode
                ? "none"
                : "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`https://i.pravatar.cc/150?img=${index + 10}`}
              alt="profile"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />

            <h2 style={{ fontSize: "24px" }}>
              {alumni.name}
            </h2>

            <p style={{ color: darkMode ? "gray" : "#555" }}>
              {alumni.role}
            </p>

            <p style={{ marginTop: "5px" }}>
              {alumni.company}
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "12px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Connect
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Alumni;