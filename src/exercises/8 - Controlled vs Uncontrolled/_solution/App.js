import React from 'react';
import exercise from '../exercise.json'
import Game from "../../../app/components/Game"
import "../../../app/style.css"
import Search from './Search' 

function App() {
  return (
    <div>
      Exercise#: {exercise.name}
      <Game />
      <Search />
    </div>
  );
}

export default App;
