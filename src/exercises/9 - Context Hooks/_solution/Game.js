import React, { useContext, useState } from 'react';
import Board from '../../../app/components/Board';
import { getHintForBoard, boardHasWinner, blankBoard, themes } from '../../../app/utils';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext)
}

function Game() {
  const [board, setBoard] = useState(blankBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [hintSquare, setHintSquare] = useState(-1);
  const [theme, setTheme] = useState(themes.light);

  const currentPlayer = isXTurn ? 'X' : 'O';

  function handleSquareClick(squareIndex) {
    if (!board[squareIndex]) {
      const newBoard = [...board];
      newBoard[squareIndex] = currentPlayer;

      if (boardHasWinner(newBoard)) {
        alert(`${currentPlayer} Wins!`);
        resetGame();
      } else {
        setBoard(newBoard);
        setIsXTurn(!isXTurn);
      }
      setHintSquare(-1);
    }
  }

  async function handleGetHint() {
    setHintSquare(await getHintForBoard(board, currentPlayer));
  }

  function handleToggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  function resetGame() {
    setIsXTurn(true);
    setBoard(blankBoard);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Board
        board={board}
        onSquareClick={handleSquareClick}
        hintSquare={hintSquare}
      />

      <button onClick={handleGetHint}>Get Hint</button>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      current player: {currentPlayer}
    </ThemeContext.Provider>
  );
}

export default Game;
