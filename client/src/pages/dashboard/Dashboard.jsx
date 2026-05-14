import MainLayout from "../../layouts/MainLayout";
import { useTheme } from "../../context/ThemeContext";

import CreatePost from "../../components/feed/CreatePost";
import PostCard from "../../components/feed/PostCard";

const Dashboard = () => {
  const { darkMode } = useTheme();

  return (
    <MainLayout>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          color: darkMode ? "white" : "black",
        }}
      >
        {/* HEADER */}
        <h1
          style={{
            fontSize: "45px",
            marginBottom: "30px",
            color: "#3b82f6",
          }}
        >
          Alumni Feed
        </h1>

        {/* FEED WRAPPER (IMPORTANT FOR REAL APP LOOK) */}
        <div
          style={{
            background: darkMode ? "#0f172a" : "#f8fafc",
            padding: "20px",
            borderRadius: "20px",
            border: darkMode
              ? "1px solid #1e293b"
              : "1px solid #e5e7eb",
          }}
        >
          {/* CREATE POST */}
          <CreatePost />

          {/* POSTS */}
          <div style={{ marginTop: "20px" }}>
            <PostCard
              name="Rahul Kumar"
              role="Software Engineer at Google"
              post="Excited to share that I got placed at Google 🚀"
            />

            <PostCard
              name="Priya Sharma"
              role="Data Analyst at Microsoft"
              post="Microsoft internship applications are now open 💼"
            />

            <PostCard
              name="Arjun Reddy"
              role="Cloud Engineer at Amazon"
              post="Happy to mentor juniors for placements 🎯"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;