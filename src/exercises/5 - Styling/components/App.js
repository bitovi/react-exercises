import React from 'react';

import './App.css';

/**
 * Exercise Instructions:
 * You have been provided a basic set of global styles in App.css. Your task is
 * to convert these initial styles into each of the other styling types.
 * 1. Inline Styles
 * 2. Modular CSS
 * 3. Styled Components
 */

function App() {
  return (
    <div className="board">
      <div className="square">O</div>
      <div className="square">X</div>
      <div className="square">O</div>
      <div className="square hint"></div>
      <div className="square">X</div>
      <div className="square">X</div>
      <div className="square"></div>
      <div className="square">O</div>
      <div className="square">X</div>
    </div>
  );
}

export default App;
