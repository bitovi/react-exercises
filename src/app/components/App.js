import React from 'react';
import exercise from '../exercise.json'
import Game from "./Game"
import "../style.css"

function App() {
  return (
    <div>
      Exercise#: {exercise.name}
      <Game />
    </div>
  );
}

export default App;
