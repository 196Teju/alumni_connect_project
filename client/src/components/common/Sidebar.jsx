import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
        position: "fixed",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#3b82f6",
        }}
      >
        AlumniConnect
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          fontSize: "18px",
        }}
      >
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/alumni">Alumni</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/events">Events</Link>
        <Link to="/teachers">Teachers</Link>
        <Link to="/messaging">Messaging</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;