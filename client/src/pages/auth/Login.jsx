import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "black",
        color: "white",
        height: "100vh",
        padding: "50px",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>
        LOGIN PAGE WORKING ✅
      </h1>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Go Dashboard
      </button>
    </div>
  );
};

export default Login;