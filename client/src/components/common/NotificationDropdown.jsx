const NotificationDropdown = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        right: "20px",
        width: "320px",
        background: "#111827",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        zIndex: 999,
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "22px",
        }}
      >
        Notifications
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          Rahul Kumar accepted your request
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          New Microsoft job posted
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          Alumni meetup starts tomorrow
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;