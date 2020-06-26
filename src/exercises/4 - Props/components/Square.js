import React from 'react'

// Square will receive 2 props, "onClick" and "symbol"
// Try destructuring the "props" object below to get them
function Square(props) {
    return (
        <div
            className="square"
            // add an onClick handler that calls the onClick
            // prop that was passed in
        >
            {/* display the "symbol" prop here */}
        </div>
    );
}

export default Square;