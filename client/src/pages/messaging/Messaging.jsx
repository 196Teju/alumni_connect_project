import MainLayout from "../../layouts/MainLayout";
import { useTheme } from "../../context/ThemeContext";

const Messaging = () => {
  const { darkMode } = useTheme();

  const users = ["Rahul Kumar", "Priya Sharma", "Arjun Reddy"];

  return (
    <MainLayout>
      <h1
        style={{
          fontSize: "45px",
          marginBottom: "30px",
          color: "#3b82f6",
        }}
      >
        Messaging
      </h1>

      <div
        style={{
          display: "flex",
          height: "75vh",
          background: darkMode ? "#111827" : "#ffffff",
          borderRadius: "20px",
          overflow: "hidden",
          color: darkMode ? "white" : "black",
          boxShadow: darkMode
            ? "none"
            : "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* LEFT SIDEBAR */}
        <div
          style={{
            width: "30%",
            borderRight: darkMode
              ? "1px solid #1e293b"
              : "1px solid #e2e8f0",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            placeholder="Search chats..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: darkMode ? "#1e293b" : "#e2e8f0",
              color: darkMode ? "white" : "black",
              marginBottom: "20px",
              outline: "none",
            }}
          />

          <div style={{ overflowY: "auto" }}>
            {users.map((user, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  marginBottom: "10px",
                  background:
                    index === 0
                      ? "#2563eb"
                      : darkMode
                      ? "#1e293b"
                      : "#f1f5f9",
                  color: index === 0 ? "white" : darkMode ? "white" : "black",
                  transition: "0.2s",
                }}
              >
                <img
                  src={`https://i.pravatar.cc/50?img=${index + 20}`}
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                  }}
                />

                <div>
                  <h3 style={{ fontSize: "15px", margin: 0 }}>{user}</h3>

                  <p
                    style={{
                      fontSize: "12px",
                      margin: 0,
                      opacity: 0.8,
                    }}
                  >
                    Hey! Let's connect 🚀
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHAT WINDOW */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* MESSAGES */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* incoming */}
            <div
              style={{
                background: "#2563eb",
                padding: "12px 16px",
                borderRadius: "15px",
                width: "fit-content",
                color: "white",
                maxWidth: "60%",
              }}
            >
              Hello 👋
            </div>

            {/* outgoing */}
            <div
              style={{
                background: darkMode ? "#1e293b" : "#e2e8f0",
                padding: "12px 16px",
                borderRadius: "15px",
                width: "fit-content",
                marginLeft: "auto",
                maxWidth: "60%",
              }}
            >
              Hi! Nice to connect 😄
            </div>
          </div>

          {/* INPUT */}
          <div
            style={{
              padding: "15px",
              borderTop: darkMode
                ? "1px solid #1e293b"
                : "1px solid #e2e8f0",
              display: "flex",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                background: darkMode ? "#1e293b" : "#e2e8f0",
                color: darkMode ? "white" : "black",
                outline: "none",
              }}
            />

            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "14px 20px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messaging;