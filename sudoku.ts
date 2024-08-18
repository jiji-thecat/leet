{
  const GRID_SIZE = 9;
  const SUBGRID_SIZE = 3;

  const solveSudoku = (board: number[][]): boolean => {
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (board[row][col] === 0) {
          for (let k = 1; k <= 9; k++) {
            if (isSafe(board, row, col, k)) {
              board[row][col] = k;

              if (solveSudoku(board)) {
                return true;
              }

              board[row][col] = 0;
            }
          }

          return false;
        }
      }
    }
    return true;
  };

  const isSafe = (board: number[][], row: number, col: number, k: number): boolean => {
    for (let i = 0; i < GRID_SIZE; i++) {
      if (board[row][i] === k || board[i][col] === k) {
        return false;
      }
    }

    let startRow = Math.floor(row / SUBGRID_SIZE) * SUBGRID_SIZE;
    let startCol = Math.floor(col / SUBGRID_SIZE) * SUBGRID_SIZE;
    for (let i = 0; i < SUBGRID_SIZE; i++) {
      for (let j = 0; j < SUBGRID_SIZE; j++) {
        if (board[startRow + i][startCol + j] === k) {
          return false;
        }
      }
    }

    return true;
  };

  // 数独の例
  const board: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const board2: number[][] = [
    [0, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  console.log(solveSudoku(board2) ? board2 : 'F');
}
