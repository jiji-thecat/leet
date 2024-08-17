{
  const GRID_SIZE = 9;
  const SUBGRID_SIZE = 3;

  const solveSudoku = (board: number[][]): boolean => {
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (board[row][col] !== 0) {
          if (isSafe(board, row, col)) {
            continue;
          }
          return false;
        }
      }
    }

    return true;
  };

  const isSafe = (board: number[][], row: number, col: number): boolean => {
    const k = board[row][col];
    for (let m = 0; m < GRID_SIZE; m++) {
      if ((board[row][m] === k && col !== m) || (board[m][col] === k && row !== m)) {
        return false;
      }
    }

    let startRow = Math.floor(row / SUBGRID_SIZE) * SUBGRID_SIZE;
    let startCol = Math.floor(col / SUBGRID_SIZE) * SUBGRID_SIZE;
    for (let i = 0; i < SUBGRID_SIZE; i++) {
      for (let j = 0; j < SUBGRID_SIZE; j++) {
        if (board[startRow + i][startCol + j] === k && startRow + i !== row && startCol + j !== col) {
          return false;
        }
      }
    }

    return true;
  };

  function isValidSudoku(board: string[][]): boolean {
    const numBoard: number[][] = [];

    for (const item of board) {
      const newItem = item
        .join('')
        .replace(/[.]/g, '0')
        .split('')
        .map((value) => Number.parseInt(value));
      numBoard.push([...newItem]);
    }

    return solveSudoku(numBoard);
  }
  const board = [
    ['.', '8', '7', '6', '5', '4', '3', '2', '1'],
    ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['9', '.', '.', '.', '.', '.', '.', '.', '.'],
  ];

  const board2 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];

  console.log(isValidSudoku(board2) ? 'T' : 'F');
}
