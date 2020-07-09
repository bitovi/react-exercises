import React, { useContext } from 'react';
import { ThemeContext } from './Game';

function Square({ onClick, symbol }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="square"
      onClick={onClick}
      style={{
        color: theme.text,
        // If this square should be displayed as a hint set the background
        // to theme.hint otherwise keep it as theme.background
        background: theme.background,
      }}
    >
      {symbol}
    </div>
  );
}

export default Square;
