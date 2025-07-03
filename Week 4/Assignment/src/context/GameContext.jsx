import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(null);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const resetScore = () => setScore(0);

  return (
    <GameContext.Provider value={{
      selectedNumber, setSelectedNumber,
      score, setScore,
      diceValue, setDiceValue,
      error, setError,
      showRules, setShowRules,
      resetScore
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);