import React, {useState} from 'react'
import Board from './Board'

const blankBoard = [
    '', '', '',
    '', '', '', 
    '', '', ''
]

function Game() {

    const handleSquareClick = () => {
        console.log("You clicked a square")
    }

    const getHint = () => {
        console.log("Getting hint")
    }

    const toggleTheme = () => {
        console.log("You toggled the theme")
    }

    return (
        <>
            <Board 
                board={blankBoard}
                onSquareClick={handleSquareClick}
            />
            
            <button onClick={getHint}>Get Hint</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
            current player: X
        </>
    );
}

export default Game;