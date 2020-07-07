import React from 'react';

const boardStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '600px',
  height: '600px',
  boxShadow: '0px 3px 8px 0 rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
}

const squareStyles = {
  width: '200px',
  height: '200px',
  border: '1px solid black',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '6em',
}

const hintStyles = {
  background: '#9AE6B4',
}

function App() {
  return (
    <div style={boardStyles}>
      <div style={squareStyles}>O</div>
      <div style={squareStyles}>X</div>
      <div style={squareStyles}>O</div>
      <div style={{ ...squareStyles, ...hintStyles }}></div>
      <div style={squareStyles}>X</div>
      <div style={squareStyles}>X</div>
      <div style={squareStyles}></div>
      <div style={squareStyles}>O</div>
      <div style={squareStyles}>X</div>
    </div>
  );
}

export default App;
