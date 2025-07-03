import { useState } from 'react';
import Game from './Game';

function Home() {
  const [startGame, setStartGame] = useState(false);

  if (startGame) return <Game />;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎲 Welcome to the Dice Game</h1>
      <button onClick={() => setStartGame(true)} style={styles.button}>
        Start Game
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  diceImage: {
    width: '150px',
    margin: '1rem 0',
  },
  button: {
    fontSize: '1rem',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  },
};

export default Home;