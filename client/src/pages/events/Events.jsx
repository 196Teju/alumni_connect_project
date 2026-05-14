import MainLayout from "../../layouts/MainLayout";
import { useTheme } from "../../context/ThemeContext";

const eventsData = [
  {
    title: "Alumni Meetup 2026",
    date: "June 15, 2026",
    location: "Hyderabad",
  },
  {
    title: "Placement Training Workshop",
    date: "July 02, 2026",
    location: "Online",
  },
  {
    title: "Tech Talk by Google Engineers",
    date: "August 10, 2026",
    location: "Bangalore",
  },
];

const Events = () => {
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
          Upcoming Events
        </h1>

        {/* EVENT LIST */}
        <div style={{ display: "grid", gap: "18px" }}>
          {eventsData.map((event, index) => (
            <div
              key={index}
              style={{
                background: darkMode ? "#111827" : "#ffffff",
                padding: "22px",
                borderRadius: "16px",
                color: darkMode ? "white" : "black",
                border: darkMode
                  ? "1px solid #1e293b"
                  : "1px solid #e5e7eb",
                boxShadow: darkMode
                  ? "none"
                  : "0 6px 18px rgba(0,0,0,0.06)",
                transition: "0.2s",
              }}
            >
              {/* TOP BADGE (EVENT TYPE STYLE) */}
              <div
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  background: darkMode ? "#1e293b" : "#e2e8f0",
                  marginBottom: "10px",
                }}
              >
                Event
              </div>

              {/* TITLE */}
              <h2
                style={{
                  fontSize: "22px",
                  marginBottom: "10px",
                }}
              >
                {event.title}
              </h2>

              {/* DATE + LOCATION */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: "15px",
                  color: darkMode ? "#9ca3af" : "#555",
                  fontSize: "14px",
                }}
              >
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>

              {/* BUTTON */}
              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Events;