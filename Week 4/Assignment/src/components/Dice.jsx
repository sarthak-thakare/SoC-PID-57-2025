function Dice({ value }) {
  if (!value) return null;

  return (
    <div style={{ fontSize: "3rem", margin: "1rem" }}>
      🎲 {value}
    </div>
  );
}

export default Dice;