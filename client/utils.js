import { SIGNS } from './consts';

export function isWinner(board, sign = null) {
  const winningCells = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ];

  for (let i = 0, n = winningCells.length; i < n; i++) {
    const [a, b, c, d] = winningCells[i];

    if (board[a] === board[b] && board[b] === board[c] && board[c] === board[d] && board[d] !== SIGNS.EMPTY) {
      if (!sign) return board[a];
      else return true;
    }
  }

  return false;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function botTurn(board) {
  for (let i = 0; i <= 15; i++) {
    let rand = getRandomInt(0, 15);
    if (board[rand] === SIGNS.EMPTY) {
      return rand;
    }
  }
}
