import axios from 'axios';

export const blankBoard = ['', '', '', '', '', '', '', '', ''];

export const themes = {
  light: {
    text: '#4A5568',
    background: '#EDF2F7',
  },
  dark: {
    text: '#EDF2F7',
    background: '#4A5568',
  },
};

export async function getHintForBoard(board, currentPlayerSymbol) {
  const boardAsString = board.map((s) => (s ? s : '-'));
  const res = await axios.get(
    `https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/${boardAsString.join(
      '',
    )}/${currentPlayerSymbol}`,
    {
      headers: {
        'x-rapidapi-key': '5eb61409e7mshed3223fe50b7b37p1267bejsn264f99c41c83',
      },
    },
  );
  return res.data.recommendation;
}

export function boardHasWinner(board) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winningCombo = winningCombos.find((combo) => {
    if (
      board[combo[0]] !== '' &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      return true;
    } else {
      return false;
    }
  });
  return !!winningCombo;
}
