
const alive = "*"
const dead = ""

const createGrid: (col: number, row: number) => string[][] = (col, row) => {
  if (!Boolean(col) || !Boolean(row)) {
    console.log("please supply a column value and row value")
  }
  // setup grid and init random set of cells
  return new Array(row).fill(false).map(() => new Array(col).fill(false).map(() => Math.random() < 0.5 ? alive : dead))
}

const getLiveNeighbors = (grid: string[][], rowIndex: number, colIndex: number ) => {
  const directions: Array<[number, number]> = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1],         [0,1],
    [1,-1], [1,0], [1,1],
  ]

  return directions.reduce((liveCount, [rowOffset, colOffset]) => {
    const rowToCheck = rowIndex + rowOffset
    const colToCheck = colIndex + colOffset

    if (rowToCheck >= 0 && rowToCheck < grid.length && colToCheck >= 0 && colToCheck < grid[rowIndex].length) {
      if (grid[rowToCheck][colToCheck] === alive) {
        liveCount++
      }
    }

    return liveCount
  }, 0)
}

const run: (grid: string[][], iterations: number) => void = (grid, iterations = 3) => {
  // run as many times as number of iterations
  // iterate over each cell
  // check biz rules, update cells accordingly

    console.log(grid)
    const iterationGrid = grid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const countLiveNeighbors = getLiveNeighbors(grid, rowIndex, colIndex)

        if (col === alive) {
          if ([2,3].includes(countLiveNeighbors)) {
             // console.log("should survive")
             return alive
          } else {
            // console.log("should die")
            return dead
          }
        } else if (col === dead) {
          if (countLiveNeighbors === 3) {
            // console.log("should become alive")
            return alive
            // } else {
            // console.log("stay dead :sad:")
          }
        }

        return col
      })
    })

    if (iterations > 0) {
      run(iterationGrid, iterations - 1)
    }
}

const gameOfLife: () => void = () => {
  const grid = createGrid(10, 10);
  run(grid, 2)
  console.log("complete")
}

// run the script
gameOfLife();
