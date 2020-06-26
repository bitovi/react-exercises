import React, {useContext} from 'react'
import {ThemeContext} from '../Game/Game'

function Square({onClick, symbol, displayAsHint}: SquareProps) {
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

interface SquareProps {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    symbol: string,
    displayAsHint: boolean
}

export default Square;