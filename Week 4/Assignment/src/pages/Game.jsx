import { useGame } from "../context/GameContext";
import Box from "../components/Box";
import Button from "../components/Button";
import Dice from "../components/Dice";

function Game() {
  const {
    selectedNumber, setSelectedNumber,
    score, setScore,
    diceValue, setDiceValue,
    error, setError,
    showRules, setShowRules,
    resetScore
  } = useGame();

  const handleRoll = () => {
    if (selectedNumber === null) {
      setError("Please select a number first!");
      return;
    }
    setError("");
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(roll);

    if (roll === selectedNumber) {
      setScore(prev => prev + roll);
    } else {
      setScore(prev => prev - 2);
    }
  };

  return (
    <div className="game-container">
      <h1>Dice Game</h1>
      <div className="score">Score: {score}</div>

      <div className="box-container">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <Box key={num} number={num} selected={num === selectedNumber}
            onClick={() => setSelectedNumber(num)} />
        ))}
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <Dice value={diceValue} />

      <div className="button-group">
        <Button label="Roll Dice" onClick={handleRoll} />
        <Button label="Reset Score" onClick={resetScore} />
        <Button label={showRules ? "Hide Rules" : "Show Rules"} onClick={() => setShowRules(prev => !prev)} />
      </div>

      {showRules && (
        <div className="rules">
          <h2>Game Rules</h2>
          <ul>
            <li>Select a number between 1-6</li>
            <li>Click Roll Dice</li>
            <li>Match: Score +N points</li>
            <li>No match: Lose 2 points</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Game;