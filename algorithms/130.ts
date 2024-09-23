// 130. Surrounded Regions

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  for (let x = 0; x < board[0].length; x++) {
    mark(board, [0, x]);
    mark(board, [board.length - 1, x]);
  }

  for (let y = 0; y < board.length; y++) {
    mark(board, [y, 0]);
    mark(board, [y, board[y].length - 1]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      switch (board[i][j]) {
        case "O":
          board[i][j] = "X";
          break;
        case "V":
          board[i][j] = "O";
          break;
      }
    }
  }
}

type Cell = [number, number];

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function mark(board: string[][], cell: Cell) {
  if (board[cell[0]][cell[1]] !== "O") {
    return;
  }

  board[cell[0]][cell[1]] = "V";

  for (const direction of directions) {
    const next: Cell = [cell[0] - direction[0], cell[1] - direction[1]];

    const isOutside =
      next[0] < 0 ||
      next[0] >= board.length ||
      next[1] < 0 ||
      next[1] >= board[0].length;

    if (isOutside || board[next[0]][next[1]] !== "O") {
      continue;
    }
    mark(board, next);
  }
}
