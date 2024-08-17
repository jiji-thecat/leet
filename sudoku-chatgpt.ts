// TypeScriptで数独を解くプログラム
{
  // 数独のサイズを定義
  const GRID_SIZE = 9;
  const SUBGRID_SIZE = 3;

  // 数独を解く関数
  function solveSudoku(board: number[][]): boolean {
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        // 空のセル（0）を見つける
        if (board[row][col] === 0) {
          // 1から9までの数字を試す
          for (let num = 1; num <= 9; num++) {
            if (isSafe(board, row, col, num)) {
              // 数字を配置
              board[row][col] = num;

              // 次のセルに進む
              if (solveSudoku(board)) {
                return true;
              }

              // 配置が無効だった場合、元に戻す
              board[row][col] = 0;
            }
          }
          // すべての数字を試しても解けない場合はfalseを返す
          return false;
        }
      }
    }
    // すべてのセルが埋まったらtrueを返す
    return true;
  }

  // 数字が配置できるかどうかを確認する関数
  function isSafe(board: number[][], row: number, col: number, num: number): boolean {
    // 行と列に同じ数字がないかチェック
    for (let i = 0; i < GRID_SIZE; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
    }

    // 3x3のサブグリッド内で同じ数字がないかチェック
    const startRow = Math.floor(row / SUBGRID_SIZE) * SUBGRID_SIZE;
    const startCol = Math.floor(col / SUBGRID_SIZE) * SUBGRID_SIZE;
    for (let i = 0; i < SUBGRID_SIZE; i++) {
      for (let j = 0; j < SUBGRID_SIZE; j++) {
        if (board[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }

    return true;
  }

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

  // 数独を解く
  if (solveSudoku(board2)) {
    console.log('解けました!');
    console.log(board2);
  } else {
    console.log('解けませんでした。');
  }
}
