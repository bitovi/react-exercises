import React, { useState } from 'react';
import Board from './Board';
import { getHintForBoard, boardHasWinner, blankBoard, themes } from '../utils';

export const ThemeContext = React.createContext(themes.light);

function Game() {
  const [board, setBoard] = useState(blankBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [theme, setTheme] = useState(themes.light);
  const [hintSquare, setHintSquare] = useState(-1);

  function handleSquareClick(squareIndex) {
    if (!board[squareIndex]) {
      const newBoard = [...board];
      newBoard[squareIndex] = getCurrentPlayer();

      if (boardHasWinner(newBoard)) {
        alert(`${getCurrentPlayer()} Wins!`);
        resetGame();
      } else {
        setBoard(newBoard);
        setIsXTurn(!isXTurn);
      }

      setHintSquare(-1);
    }
  }

  function resetGame() {
    setIsXTurn(true);
    setBoard(blankBoard);
  }

  const getCurrentPlayer = () => (isXTurn ? 'X' : 'O');

  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  async function handleHint() {
    setHintSquare(await getHintForBoard(board, getCurrentPlayer()));
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Board
          board={board}
          onSquareClick={handleSquareClick}
          hintSquare={hintSquare}
        />
      </ThemeContext.Provider>
      <button onClick={handleHint}>Get Hint</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      current player: {getCurrentPlayer()}
    </>
  );
}

export default Game;
