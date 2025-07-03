function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "0.5rem",
        padding: "0.6rem 1.2rem",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#4CAF50",
        color: "white",
        fontSize: "1rem",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}

export default Button;