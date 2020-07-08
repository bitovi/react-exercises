import React from 'react';
import { useTheme } from './Game';

function Square({ onClick, symbol, displayAsHint, id }) {
  const theme = useTheme();

  return (
    <div
      id={id}
      className="square"
      onClick={onClick}
      style={{
        color: theme.text,
        background: displayAsHint ? '#9AE6B4' : theme.background,
      }}
    >
      {symbol}
    </div>
  );
}

export default Square;
