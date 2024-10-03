# Stack

A stack implementation in typescript

## Run

```sh
npx tsx ./main.ts
```

## Stack

Stacks are a data structure that utilizes Last In First Out (LIFO) principles.

A real world example of this is to get and eat a `stack` of pancakes. You pile them one on top of another and remove from the last that you added (or the top).

1. Empty state

```
|   |
|   |
|   |
|   |
|---|
```

2. `.push` onto the stack

```
  +--- |-1-|
  |
| | |
| V |
|   |
|-1-|
|---|
```

3. `.pop` off of the stack

```
  +--> |-2-|
  |
| | |
| | |
|-2-|
|-1-|
|---|
```
