import React from 'react'

function Square({onClick, symbol}) {
    return (
        <div
            className="square"
            onClick={onClick}
        >
            {symbol}
        </div>
    );
}

export default Square;