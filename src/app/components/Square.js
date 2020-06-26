import React, {useContext} from 'react'
import {ThemeContext} from './Game'

function Square({onClick, symbol, displayAsHint}) {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <div
            className="square"
            onClick={onClick}
            style={{color: theme.text, background: displayAsHint ? "#9AE6B4" : theme.background}}
        >
            {symbol}
        </div>
    );
}

export default Square;