import React, { useState } from 'react';
import Square from '../../../app/components/Square';

function Board() {
  const board = ["", "", "", "", "", "", "", "", ""]
  // store the board in state
  // store the current player in state

  function handleSquareClick(square) {
    // update the board
    // update the current player
  }

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
