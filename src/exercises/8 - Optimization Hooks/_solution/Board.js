import React, { useState, useCallback } from 'react';
import Square from '../../../app/components/Square';

function Board() {
  const [board, setBoard] = useState([ '', '', '', '', '', '', '', '', '' ]);
  const [isXTurn, setIsXTurn] = useState(true);

  const handleSquareClick = useCallback((squareIndex) => {
    if (board[squareIndex]) {
      return;
    }

    const newBoard = [ ...board ];
    newBoard[squareIndex] = isXTurn ? 'X' : 'O';

    setBoard(newBoard);
    setIsXTurn((value) => !value);
  }, [ board, isXTurn ])

  return (
    <div className="board">
      {board.map((symbol, index) => (
        <Square
          key={index}
          symbol={symbol}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
