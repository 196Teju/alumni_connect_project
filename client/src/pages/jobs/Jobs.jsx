import MainLayout from "../../layouts/MainLayout";
import { useTheme } from "../../context/ThemeContext";

const jobsData = [
  {
    company: "Google",
    role: "Frontend Developer",
    location: "Hyderabad",
  },
  {
    company: "Microsoft",
    role: "Data Analyst",
    location: "Bangalore",
  },
  {
    company: "Amazon",
    role: "Cloud Engineer",
    location: "Chennai",
  },
];

const Jobs = () => {
  const { darkMode } = useTheme();

  return (
    <MainLayout>
      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        {/* TITLE */}
        <h1
          style={{
            fontSize: "45px",
            marginBottom: "30px",
            color: "#3b82f6",
          }}
        >
          Job Opportunities
        </h1>

        {/* JOB LIST */}
        <div style={{ display: "grid", gap: "20px" }}>
          {jobsData.map((job, index) => (
            <div
              key={index}
              style={{
                background: darkMode ? "#111827" : "#ffffff",
                padding: "25px",
                borderRadius: "18px",
                color: darkMode ? "white" : "black",
                boxShadow: darkMode
                  ? "none"
                  : "0 4px 15px rgba(0,0,0,0.08)",
                border: darkMode ? "1px solid #1e293b" : "1px solid #e5e7eb",
                transition: "0.2s",
              }}
            >
              {/* COMPANY TAG */}
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background: darkMode ? "#1e293b" : "#e2e8f0",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                {job.company}
              </div>

              {/* ROLE */}
              <h2
                style={{
                  fontSize: "24px",
                  marginTop: "10px",
                }}
              >
                {job.role}
              </h2>

              {/* LOCATION */}
              <p
                style={{
                  marginTop: "8px",
                  color: darkMode ? "#9ca3af" : "#555",
                }}
              >
                📍 {job.location}
              </p>

              {/* BUTTON */}
              <button
                style={{
                  marginTop: "18px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;