import React from 'react'
import Square from './Square'

function Board({onSquareClick, board}) {
    return (
        <div className="board">
            {/* 
                Use the map function to loop over the "board" prop.
                Each item in the board array should be mapped to 
                a <Square /> component.

                The Square component takes a symbol prop (x or o), an 
                onClick prop, and since we're using the map function each
                Square will also need a unique key prop.
            */}
        </div>
    );
}

export default Board;