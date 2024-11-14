/**
 Do not return anything, modify board in-place instead.
 */
// loop twice
// first replace O's that are on the edge to U
// second, replace inside Us to O and X Os to X
function solve(board: string[][]): void {
  const dfs = (i: number, j: number): void => {
    if (i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] === 'X' || board[i][j] === 'U') {
      return;
    }

    board[i][j] = 'U';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i !== 0 && i !== board.length - 1 && j > 0 && j < board[0].length - 1) {
        continue;
      }

      if (board[i][j] === 'O') {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'U') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
}

const board = [
  ['O', 'O'],
  ['O', 'O'],
];
solve(board);
console.log(board);
