import React from 'react';
import Square from './Square';

function Board({ onSquareClick, board, hintSquare }) {
  return (
    <div className="board">
      {board.map((symbol, index) => (
        <Square
          key={index}
          id={`square-${index}`}
          symbol={symbol}
          onClick={() => onSquareClick(index)}
          displayAsHint={index === hintSquare}
        />
      ))}
    </div>
  );
}

export default Board;
