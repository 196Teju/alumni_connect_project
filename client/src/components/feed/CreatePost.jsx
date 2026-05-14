const CreatePost = () => {
  return (
    <div
      style={{
        background: "#111827",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "30px",
      }}
    >
      <textarea
        placeholder="Share your achievement..."
        rows="4"
        style={{
          width: "100%",
          background: "#1e293b",
          border: "none",
          borderRadius: "15px",
          padding: "20px",
          color: "white",
          outline: "none",
          resize: "none",
        }}
      />

      <button
        style={{
          marginTop: "20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;