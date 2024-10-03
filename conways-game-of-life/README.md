# Conways Game of Life

Conways game of life implementation in typescript
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

## Rules

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Run it

```sh
npx tsx ./main.ts
```

## Performance metrics

### Time concerns

We early return if the grid ever stops changing during iterations leaving with a best case of O(1) and worst case of O(row\*col) of the grid

### Space concerns

- Early commits used recursion which has worst case of O(iterations), recursion also takes up stack space therefore if iterations or gridsize are high, this could lead to stack overflow
- The `for` loop implementation has O(1) constant space
