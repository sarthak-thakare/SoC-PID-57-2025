function Box({ number, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "1rem",
        margin: "0.5rem",
        width: "40px",
        height: "40px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: selected ? "3px solid green" : "1px solid gray",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "1.2rem"
      }}
    >
      {number}
    </div>
  );
}

export default Box;