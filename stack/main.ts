class Stack<T> {
  private stack: Array<T> = []
  private maxSize: number

  constructor(maxSize: number = Infinity) {
    this.maxSize = maxSize
  }

  push(message: T): void {
    if (!this.isFull()) {
      this.stack.push(message)
    } else {
      throw new Error("Stack is full. Please `.pop()` before adding more.")
    }
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1]
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  isFull(): boolean {
    return this.stack.length === this.maxSize
  }
}


const stack = new Stack<string>(2)
console.log("isEmpty?", stack.isEmpty())
console.log("current pancake stack", stack)

stack.push("pancake 1")
console.log("isEmpty?", stack.isEmpty())
console.log("current pancake stack", stack)

stack.push("pancake 2")
console.log("isEmpty?", stack.isEmpty())
console.log("current pancake stack", stack)
console.log("isFull?", stack.isFull())
console.log("what's next in the stack?", stack.peek())

stack.pop()
console.log("isEmpty?", stack.isEmpty())
console.log("current pancake stack", stack)

// remove all things and some
stack.pop()
stack.pop()
// won't break as pop handles undefined gracefully
stack.pop()
console.log("isEmpty?", stack.isEmpty())

stack.push("new pancake 1")
stack.push("new pancake 2")
// we expect this to throw an error
stack.push("new pancake 3")
