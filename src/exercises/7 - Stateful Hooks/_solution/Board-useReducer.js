import React, { useReducer } from 'react';
import Square from '../../../app/components/Square';

// The initial state.
// The state being an object is convention, but not required.
const initialState = {
  board: ['', '', '', '', '', '', '', '', ''],
  isXTurn: true,
};

// The reducer function.
// The returned value is the new state. If the reducer ever returns `undefined`,
// the new state will be undefined, which will likely break your logic.
// Returning the current state object, as is done when `board[index]` is truthy,
// is an optimization that prevents updates.
function reducer(state, action) {
  // Note: the `action` is is just the argument passed to dispatch.
  // Making it an object with a `type` property is convention, but not required.

  if (action.type === 'play') {
    const { index } = action;
    const { board, isXTurn } = state;

    if (board[index]) {
      return state;
    }

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';

    return {
      board: newBoard,
      isXTurn: !isXTurn,
    };
  }

  return state;
}

function Board() {
  const [{ board }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="board">
      {board.map((symbol, index) => (
        <Square
          key={index}
          symbol={symbol}
          onClick={() => dispatch({ type: 'play', index })}
        />
      ))}
    </div>
  );
}

export default Board;
