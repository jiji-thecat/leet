function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;

  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(row: number, col: number, ocean: boolean[][], prevHeight: number): void {
    if (row < 0 || col < 0 || row >= rows || col >= cols || ocean[row][col] || heights[row][col] < prevHeight) {
      return;
    }

    ocean[row][col] = true;

    for (const [dx, dy] of directions) {
      dfs(row + dx, col + dy, ocean, heights[row][col]);
    }
  }

  // 上下エッジと左右エッジからdfsを進めるだけでOK.
  // Start DFS from the edges for both oceans
  for (let col = 0; col < cols; col++) {
    dfs(0, col, pacific, heights[0][col]); // Top edge for Pacific
    dfs(rows - 1, col, atlantic, heights[rows - 1][col]); // Bottom edge for Atlantic
  }

  // 上下エッジと左右エッジからdfsを進めるだけでOK.
  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pacific, heights[row][0]); // Left edge for Pacific
    dfs(row, cols - 1, atlantic, heights[row][cols - 1]); // Right edge for Atlantic
  }

  // Find cells reachable by both oceans
  const result: number[][] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
