import React from 'react';
import Square from './Square';

function Board({ onSquareClick, board }) {
  return (
    <div className="board">
      {board.map((symbol, index) => (
        <Square
          key={index}
          symbol={symbol}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
