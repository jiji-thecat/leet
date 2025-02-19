/**
 * summary
 *  solve sudoku. return true / false
 *
 * example
 *  solvable board -> T
 *  not -> F
 *
 * edge
 * -
 *
 * memo
 *  backtracking approach
 *
 * loop i=0 i<board.len i++
 *  loop j=0 j<board[0].len j++
 *    if(board[i][j] === 0){
 *     loop k=0; k<9; k++ {
 *      if(isSafe(i,j,k))
 *        board[i][j]=k
 *
 *        if(solveSudoku(board))
 *           ret true
 *
 *        board[i][j]=0
 *     }
 *    ret false
 *    }
 *
 * ret true
 *
 * isSafe(i,j,k) //if k is not in row i and col j. if k is not in 3x3 area
 *  loop p=0 p<9; p++
 *    if(board[i][p] === k || board[p][j]===k)
 *     ret false
 *
 *  startRow = i/3 * 3
 *  startCol = j/3 * 3
 *  loop p=startRow p<startRow+3 p++
 *   loop q=startCol q<startCol+3 q++
 *     if board[p][q] === k
 *      ret false
 *
 * ret true
 *
 * tc o(m*n)
 * sc o(m*n)
 */
export {};
const solveSudoku = (board: number[][]): boolean => {};

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

console.log(solveSudoku(board)); // T
console.log(solveSudoku(board2)); // F
