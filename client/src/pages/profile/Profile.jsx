import MainLayout from "../../layouts/MainLayout";

const Profile = () => {
  return (
    <MainLayout>
      {/* Cover */}
      <div
        style={{
          height: "220px",
          background:
            "linear-gradient(to right, #2563eb, #1e3a8a)",
          borderRadius: "25px",
          position: "relative",
          marginBottom: "80px",
        }}
      >
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            border: "6px solid #020617",
            position: "absolute",
            bottom: "-60px",
            left: "40px",
          }}
        />
      </div>

      {/* Profile Info */}
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "white",
          }}
        >
          Tejashwini
        </h1>

        <p
          style={{
            color: "gray",
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          Full Stack Developer | React Developer | Student
        </p>
      </div>

      {/* About */}
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          About
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#d1d5db",
          }}
        >
          Passionate developer building modern web
          applications using React, Node.js and MongoDB.
          Interested in full stack development and UI/UX.
        </p>
      </div>

      {/* Skills */}
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {[
            "React",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Express.js",
          ].map((skill, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "12px 20px",
                borderRadius: "30px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Resume Upload */}
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          Resume
        </h2>

        <input
          type="file"
          style={{
            color: "white",
          }}
        />

        <button
          style={{
            display: "block",
            marginTop: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 25px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Upload Resume
        </button>
      </div>
    </MainLayout>
  );
};

export default Profile;