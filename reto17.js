function detectBombs(grid) {
  // // first idea - 1 estrella
  // const newGrid = Array(grid.length)

  // for (let i = 0; i < grid.length; i++) {
  //   newGrid[i] = Array(grid[i].length)

  //   for (let j = 0; j < grid[i].length; j++) {
  //     let countBombs = 0
  //     if (grid[i - 1]?.[j]) countBombs++
  //     if (grid[i + 1]?.[j]) countBombs++
  //     if (grid[i]?.[j - 1]) countBombs++
  //     if (grid[i]?.[j + 1]) countBombs++
  //     if (grid[i - 1]?.[j - 1]) countBombs++
  //     if (grid[i - 1]?.[j + 1]) countBombs++
  //     if (grid[i + 1]?.[j - 1]) countBombs++
  //     if (grid[i + 1]?.[j + 1]) countBombs++

  //     newGrid[i][j] = countBombs
  //   }
  // }

  // return newGrid

  // second idea - 5 estrellas
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  const newGrid = Array(grid.length);

  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = Array(grid[i].length)

    for (let j = 0; j < grid[i].length; j++) {

      newGrid[i][j] = directions.reduce(
        (count, [dx, dy]) => count + (grid[i + dx]?.[j + dy] ? 1 : 0),
        0
      );

    }
  }

  return newGrid;
}

console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [true, false],
  [false, false]
]))
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true]
]))
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]