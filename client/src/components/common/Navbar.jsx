import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import NotificationDropdown from "./NotificationDropdown";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div
      style={{
        background: darkMode ? "#111827" : "#ffffff",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: darkMode
          ? "1px solid #1e293b"
          : "1px solid #cbd5e1",
        position: "relative",
      }}
    >
      <input
        placeholder="Search..."
        style={{
          background: darkMode ? "#1e293b" : "#e2e8f0",
          color: darkMode ? "white" : "black",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          width: "350px",
          outline: "none",
        }}
      />

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button onClick={() => setShowNotifications(!showNotifications)}>
          Notifications
        </button>

        <img src="https://i.pravatar.cc/40" style={{ borderRadius: "50%" }} />
      </div>

      {showNotifications && <NotificationDropdown />}
    </div>
  );
};

export default Navbar;