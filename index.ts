function shortestPathBinaryMatrix(grid: number[][]): number {
  // Corner cases
  if (grid[0][0] === 1) return -1;

  const n = grid.length;
  const queue: number[][][] = [[]];
  let counter = 1;

  // Prepare matrix of already visited nodes
  const visited = new Array(n);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(n).fill(0);
  }

  let level = [[0, 0]];
  visited[0][0] = 1;
  let nextLevel = [];

  while (level.length !== 0) {
    while (level.length !== 0) {
      const node = level.pop();
      const row = node[0];
      const col = node[1];

      if (row === n - 1 && col === n - 1) return counter;

      for (let nextRow = row - 1; nextRow <= row + 1; nextRow++) {
        for (let nextCol = col - 1; nextCol <= col + 1; nextCol++) {
          if (nextRow < 0 || nextRow > n - 1 || nextCol < 0 || nextCol > n - 1)
            continue;
          if (visited[nextRow][nextCol] === 1) continue;
          if (grid[nextRow][nextCol] === 1) continue;
          nextLevel.push([nextRow, nextCol]);
          visited[nextRow][nextCol] = 1;
        }
      }
    }

    counter++;
    level = nextLevel;
  }

  return -1;
}

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
