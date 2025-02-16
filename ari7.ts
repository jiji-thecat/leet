// grid(m*n) with obstacles, find if (m-1,n-1) can be reached from (0,0) in
// less than or equal to a given time where each movement costs 1 unit of time.
// いろいろ解き方があるっぽいけど、一番ベーシックなBFSをマスターできていればいいかな。
/**
 * Problem Statement: Reach the Target in a Grid with Obstacles

You are given an m x n grid where some cells contain obstacles. Your task is to determine if it is possible to reach the bottom-right cell (m-1, n-1) from the top-left cell (0,0) in less than or equal to a given time limit.
Movement Rules

    You can move up, down, left, or right (no diagonal movement).
    Moving from one cell to another costs 1 unit of time.
    You cannot move into or through an obstacle cell.

Input

You are given:

    An integer m representing the number of rows in the grid.
    An integer n representing the number of columns in the grid.
    A 2D binary grid grid[m][n], where:
        0 represents an empty cell.
        1 represents an obstacle.
    An integer t, the maximum allowed time to reach (m-1, n-1).

Output

Return true if you can reach (m-1, n-1) from (0,0) within t time units, otherwise return false.
Constraints

    2 ≤ m, n ≤ 1000
    0 ≤ t ≤ 10^6
    grid[0][0] == 0 (The start position is always empty)
    grid[m-1][n-1] == 0 (The target position is always empty)

 * Example 1

Input:
m = 3, n = 3
grid = [[0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]]
t = 4

Output: true

Explanation:
A valid path is (0,0) → (1,0) → (2,0) → (2,1) → (2,2), which takes 4 steps.

Example 2

Input:
m = 3, n = 3
grid = [[0, 0, 0],
        [1, 1, 0],
        [0, 0, 0]]
t = 2

Output: false

Explanation:
The shortest path requires at least 3 steps, but t = 2 is too small.

Example 3

Input:
m = 2, n = 2
grid = [[0, 1],
        [1, 0]]
t = 3

Output: false

Explanation:
There is no possible path to reach (1,1).
 */

/**
 * summary
 *  grid with obstacles. find if (m-1,n-1) can be reached from (0,0) in less than or equal to a given time where each movement costs 1 unit of time.
 * 
 * example
 *  let grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
let t = 4; -> T

edge
 t=0 -> false

memo
 
t=4 -> T
 000
 010
 000

 000000
 001011
 010000
 000000

 dfs(i,j)
  if i===m-1 && j===n-1
   ret true
  if i<0 || j<0 || i>=m || j>=n || g[i][j] === 1 || t <= 0
   ret false

  g[i][j]=1
  t--;

  let res = dfs(i+1,j) ||  dfs(i-1,j) || dfs(i,j+1) ||dfs(i,j-1)
  g[i][j] = 0;
  t++;

  ret res

tc o(m*n)
sc o(m*n)

bfs

t=4 -> T
 000
 010
 000

 000000
 001011
 010000
 000000

 mat=[[1,0],[-1,0],[0,1],[0,-1]]
 queue=[[0,0]]
 while(queue.len && t>0)
  len=queue.len
  node=queue.shift; 
 for(i=0; i<len i++)
   for([x,y] of mat){
     dx = node[0]+x
     dy = node[1]+y

     if dx===m-1 && dy===n-1
      ret true

     if dx<0||dy<0||dx>=m||dy>=n||g[dx][dy] === 1||t<=0
      continue

     g[node[0]][node[1]] = 1
     queue.push([dx,dy])
    }
    t--


ret false

tc o(m*n)
sc o(4)

  */

export {};

const solutionDfs = (grid: number[][], t: number): boolean => {
  if (t === 0) {
    return false;
  }

  const m = grid.length;
  const n = grid[0].length;

  const dfs = (i: number, j: number): boolean => {
    if (i === m - 1 && j === n - 1) {
      return true;
    }
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 1 || t <= 0) {
      return false;
    }

    grid[i][j] = 1;
    t--;

    const res = dfs(i + 1, j) || dfs(i - 1, j) || dfs(i, j + 1) || dfs(i, j - 1);
    grid[i][j] = 0;
    t++;

    return res;
  };

  return dfs(0, 0);
};

const solutionBfs = (grid: number[][], t: number): boolean => {
  const mat = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue: [number, number][] = [[0, 0]];
  const m = grid.length;
  const n = grid[0].length;

  while (queue.length && t >= 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      const [cx, cy] = node;

      if (cx === m - 1 && cy === n - 1) {
        return true;
      }

      grid[cx][cy] = 1; // 訪問済みマーク

      for (const [dx, dy] of mat) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] === 1) {
          continue;
        }

        queue.push([nx, ny]);
        grid[nx][ny] = 1; // 訪問済みマーク
      }
    }

    t--; // BFSのレベル単位で時間を減らす
  }

  return false;
};

const solution = (grid: number[][], t: number): boolean => {
  return solutionBfs(grid, t);
};

let grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
let t = 4;
console.log(solution(grid, t)); // T

grid = [
  [0, 0],
  [1, 0],
];
t = 1;
console.log(solution(grid, t)); // T

grid = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0],
];
t = 2;
console.log(solution(grid, t)); // F

grid = [
  [0, 1],
  [1, 0],
];
t = 3;
console.log(solution(grid, t)); // F
grid = [
  [0, 1],
  [1, 0],
];
t = 0;
console.log(solution(grid, t)); // F

const grid1 = Array(1000)
  .fill(0)
  .map(() => Array(1000).fill(0));
grid1[0][0] = 0; // Start
grid1[999][999] = 0; // End

const t1 = 1998; // Minimum steps required is 1998 (diagonal-like movement is not allowed)
console.log(solution(grid1, t1)); // true

const grid2 = Array(1000)
  .fill(0)
  .map(() => Array(1000).fill(0));

// Creating a wall of obstacles blocking the target
for (let i = 0; i < 1000; i++) {
  grid2[i][500] = 1; // Vertical wall in the middle
}

grid2[0][0] = 0; // Start
grid2[999][999] = 0; // End

const t2 = 3000; // Large t, but no valid path
console.log(solution(grid2, t2)); // false
