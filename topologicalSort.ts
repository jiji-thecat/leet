function topologicalSort(edges: number[][], numNodes: number) {
  let inDegree = new Array(numNodes).fill(0);
  let adjList = new Map();

  // グラフ作成 & 入次数カウント
  for (let [u, v] of edges) {
    if (!adjList.has(u)) adjList.set(u, []);
    adjList.get(u).push(v);
    inDegree[v]++;
  }

  //console.log(adjList, inDegree);

  // 入次数が 0 のノードをキューに入れる
  let queue = [];
  for (let i = 0; i < numNodes; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let result = [];
  while (queue.length) {
    let node = queue.shift();
    result.push(node);

    if (adjList.has(node)) {
      for (let neighbor of adjList.get(node)) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) queue.push(neighbor);
      }
    }
  }

  console.log(result);

  return result.length === numNodes ? result : []; // サイクル検出
}

// 実行
let edges = [
  [5, 2],
  [5, 0],
  [4, 0],
  [4, 1],
  [2, 3],
  [3, 1],
];
let cycleEdges = [
  [5, 2],
  [2, 3],
  [3, 1],
  [1, 4],
  [4, 0],
  [0, 5],
];
console.log(topologicalSort(cycleEdges, 6));
// 出力例: [4, 5, 0, 2, 3, 1] (他の順番もあり)
