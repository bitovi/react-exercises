import React from 'react'
import Square from '../Square/Square'

function Board({onSquareClick, board, hintSquare}: BoardProps) {
    return (
        <div className="board">
            {board.map((symbol, index) =>     
                <Square 
                    key={index}
                    symbol={symbol}
                    onClick={() => onSquareClick(index)}
                    displayAsHint={index === hintSquare}
                />
            )}
        </div>
    );
}

interface BoardProps {
    onSquareClick: (squareIndex: number) => void,
    board: string[],
    hintSquare: number
}

export default Board;