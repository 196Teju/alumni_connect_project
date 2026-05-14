import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        background: "#020617",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "250px",
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "40px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;