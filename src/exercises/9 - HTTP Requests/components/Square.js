import React, {useContext} from 'react'
import {ThemeContext} from './Game'

// Add a boolean prop to Square called "displayAsHint"
function Square({onClick, symbol}) {
    const theme = useContext(ThemeContext);

    return (
        <div
            className="square"
            onClick={onClick}
            style={{
                color: theme.text,
                // use the "displayAsHint" prop to conditionally set the
                // background color. If this square should be displayed as
                // a hint set the background to #9AE6B4 otherwise keep itt as the
                // theme's background
                background: theme.background
            }}
        >
            {symbol}
        </div>
    );
}

export default Square;