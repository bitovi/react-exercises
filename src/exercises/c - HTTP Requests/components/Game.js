import React, { useState } from 'react';
import Board from './Board';
import { getHintForBoard, boardHasWinner, blankBoard, themes } from '../utils';

export const ThemeContext = React.createContext(themes.light);

/**
 * Create a state to store the hint value. Create a button that calls the
 * `getHintForBoard` and updates the state accordingly. Pass that hint index to
 * the board which will use it to control whether each Square should display as
 * a hint via a new prop. Use that prop to determine the Square's background
 * color, based on the theme.
 */

function Game() {
  const [board, setBoard] = useState(blankBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [theme, setTheme] = useState(themes.light);

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

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Board
          board={board}
          onSquareClick={handleSquareClick}
        />
      </ThemeContext.Provider>
      <button onClick={toggleTheme}>Toggle Theme</button>
      current player: {getCurrentPlayer()}
    </>
  );
}

export default Game;
