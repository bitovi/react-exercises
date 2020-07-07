import React from 'react';
import styled from '@emotion/styled';

export const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 600px;
  height: 600px;
  box-shadow: 0px 3px 8px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

export const Square = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6em;

  :hover {
    cursor: pointer;
    background: #bbdefb !important;
  }

  ${props => props.hint && `
    background: #9AE6B4;
  `}
`

function App() {
  return (
    <Board>
      <Square>O</Square>
      <Square>X</Square>
      <Square>O</Square>
      <Square hint></Square>
      <Square>X</Square>
      <Square>X</Square>
      <Square></Square>
      <Square>O</Square>
      <Square>X</Square>
    </Board>
  );
}

export default App;
