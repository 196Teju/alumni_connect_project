const PostCard = ({ name, role, post }) => {
  return (
    <div
      style={{
        background: "#111827",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <img
          src="https://i.pravatar.cc/50"
          alt="profile"
          style={{
            borderRadius: "50%",
          }}
        />

        <div>
          <h2>{name}</h2>
          <p style={{ color: "gray" }}>{role}</p>
        </div>
      </div>

      <p
        style={{
          lineHeight: "1.7",
        }}
      >
        {post}
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            background: "#1e293b",
            border: "none",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          👍 Like
        </button>

        <button
          style={{
            background: "#1e293b",
            border: "none",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          💬 Comment
        </button>

        <button
          style={{
            background: "#1e293b",
            border: "none",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          🔄 Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;