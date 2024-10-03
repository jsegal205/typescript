
const alive = "*"
const dead = ""

const createGrid: (col: number, row: number) => string[][] = (col, row) => {
  if (col <= 0 || row <= 0) {
    console.log("please supply a column value and row value")
    return []
  }
  // setup grid and init random set of cells
  return new Array(row).fill(false).map(() => new Array(col).fill(false).map(() => Math.random() < 0.5 ? alive : dead))
  // return new Array(row).fill(false).map(() => new Array(col).fill(false).map(() => dead))
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

// performace check
const areGridsSame = (grid1: string[][], grid2: string[][]) => {
  for (let row = 0; row < grid1.length; row++) {
    for (let col = 0; col < grid1[row].length; col++) {
      if (grid1[row][col] !== grid2[row][col]) {
        return false
      }
    }
  }
  return true
}

const run: (grid: string[][], iterations: number) => void = (grid, iterations = 3) => {
  // run as many times as number of iterations
  // iterate over each cell
  // check biz rules, update cells accordingly

  for (let iteration = 0; iteration < iterations; iteration++){
    console.log(iteration)
    console.log(grid.map(row => row.join(" ")).join("\n"));

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

    if (areGridsSame(grid, iterationGrid)) {
      break
    }

    grid = iterationGrid
  }
}

const gameOfLife: () => void = () => {
  const grid = createGrid(10, 10);
  run(grid, 20)
  console.log("complete")
}

// run the script
gameOfLife();
