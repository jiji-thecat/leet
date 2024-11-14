const numIslands = (grid: string[][]): number => {
  let ans = 0;

  const bfs = (row: number, col: number): void => {
    const queue: number[][] = [[row, col]];
    const matrix = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    while (queue.length > 0) {
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const curr = queue.shift()!;

        for (const dir of matrix) {
          const r = curr[0] + dir[0];
          const c = curr[1] + dir[1];

          if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
            continue;
          }

          grid[r][c] = '0';
          queue.push([r, c]);
        }
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        bfs(i, j);
        ans++;
      }
    }
  }

  return ans;
};

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid));
