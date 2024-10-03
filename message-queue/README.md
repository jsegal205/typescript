# Message Queue

A message queue implementation in typescript

## Run

```sh
npx tsx ./main.ts
```

## Queue

Queue are a data structure that utilizes First In First Out (FIFO) principles.

A real world example of this waiting in line at a coffee shop. You enqueue at the end (of the line) and have to wait until all the rest of the people placed their orders before you can place your order.

1. Empty state

```
|   |
|   |
|   |
|   |
|---|
```

2. `.enqueue` onto the queue

```
  +--- |-1-|
  |
| | |
| V |
|   |
|-1-|
|---|
```

3. `.dequeue` off of the queue

```
|   |
|   |
|   |
|-2-|
|---|
  |
  +--> |-1-|
```
