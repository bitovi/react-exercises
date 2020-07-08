import React, { useContext, useState } from 'react';
import Board from '../../../app/components/Board';
import { boardHasWinner, blankBoard, themes } from '../../../app/utils';

// Create a context for your theme
// Provide a theme (light or dark) to the children of this component
// Export a custom hook that returns the current theme
// Consume the custom hook in Square.js
// Create a state and button that allows the user to switch between themes

function Game() {
  const [board, setBoard] = useState(blankBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [hintSquare, setHintSquare] = useState(-1);

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

  function resetGame() {
    setIsXTurn(true);
    setBoard(blankBoard);
  }

  return (
    <>
      <Board
        board={board}
        onSquareClick={handleSquareClick}
        hintSquare={hintSquare}
      />

      current player: {currentPlayer}
    </>
  );
}

export default Game;
