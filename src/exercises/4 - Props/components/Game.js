import React, { useState } from 'react';
import Board from './Board';

const blankBoard = ['', '', '', '', '', '', '', '', ''];

function Game() {
  const getHint = () => {
    console.log('Getting hint');
  };

  const toggleTheme = () => {
    console.log('You toggled the theme');
  };

  return (
    <>
      <Board
        board={null} // What should actually go here?
        onSquareClick={() => {}}
        // ^ Create a function to pass into onSquareClick
        // that prints out "Clicked"
      />
      <button onClick={getHint}>Get Hint</button>
      <button>Toggle Theme</button>
      {/* 
                ^ Add an onClick prop to the button above
                (the toggleTheme function)
            */}
      current player: X
    </>
  );
}

export default Game;
