import React from 'react';
import Board from '../Board/Board';

function Game() {
  return (
    <>
      <Board />
      <button>Get Hint</button>
      <button>Toggle Theme</button>
      current player: X
    </>
  );
}

export default Game;
