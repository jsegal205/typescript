

const createGrid: (col: number, row: number) => boolean[][] = (col, row) => {
  if (!Boolean(col) || !Boolean(row)) {
    console.log("please supply a column value and row value")
  }
  // setup grid and init random set of cells
  return new Array(row).fill(false).map(() => new Array(col).fill(false).map(() => Math.random() < 0.5))
    // return new Array(row).fill(false).map(() => new Array(col).fill(false))
}

const run: (grid: boolean[][], iterations: number) => void = (grid, iterations = 3) => {
  // run as many times as number of iterations
  // iterate over each cell
  // check biz rules, update cells accordingly
  // for (let iteration = 0; iteration <= iterations; iteration++) {
    console.log('iteration #', iterations)
    console.log(grid)
    // grid
    const iterationGrid = grid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        // console.log("row, col, alive?", rowIndex, colIndex, col)

        const hasAbove = rowIndex > 0
        const hasLeft = colIndex > 0
        const hasRight = colIndex + 1 !== row.length
        const hasBelow = rowIndex + 1 !== grid.length

        // figure out what to do with walls
        const aboveLeft = hasAbove && hasLeft ? grid[rowIndex - 1][colIndex - 1] : "above left wall"
        const above = hasAbove ? grid[rowIndex - 1][colIndex] : "above wall"
        const aboveRight = hasAbove && hasRight ? grid[rowIndex - 1][colIndex + 1] : "above right wall"

        const rowLeft = hasLeft ? grid[rowIndex][colIndex - 1] : "row left wall"
        const rowRight = hasRight ? grid[rowIndex][colIndex + 1] : "row right wall"

        const belowLeft = hasBelow && hasLeft ? grid[rowIndex + 1][colIndex - 1] : "below left wall"
        const below = hasBelow  ? grid[rowIndex + 1][colIndex] : "below wall"
        const belowRight = hasBelow && hasRight ? grid[rowIndex + 1][colIndex + 1] : "below right wall"

        const countLiveNeighbors = [aboveLeft, above, aboveRight, rowLeft, rowRight, belowLeft, below, belowRight].filter((alive) => alive === true).length
        // console.log(countLiveNeighbors)

        if (col === true) {
          //currently alive cell
          if ([2,3].includes(countLiveNeighbors)) {
             // console.log("should survive")
          } else {
            // console.log("should die")
            return false
          }
        } else {
          if (countLiveNeighbors === 3) {
            // console.log("should become alive")
            return true
          } else {
            // console.log("stay dead :sad:")
          }
        }

        return col
      })
    })

    if (iterations > 0) {
      run(iterationGrid, iterations - 1)
    }

  // }
}

const gameOfLife: () => void = () => {
  const grid = createGrid(3,3);
  run(grid, 2)
}

// run the script
gameOfLife();
