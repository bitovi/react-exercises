import React, { useContext } from 'react';
import { ThemeContext } from './Game';

function Square({ onClick, symbol, displayAsHint }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="square"
      onClick={onClick}
      style={{
        color: theme.text,
        background: displayAsHint ? theme.hint : theme.background,
      }}
    >
      {symbol}
    </div>
  );
}

export default Square;
