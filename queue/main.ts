class Queue<T> {
  private queue: Array<T> = []
  private maxSize: number

  constructor(maxSize: number = Infinity) {
    this.maxSize = maxSize
  }

  enqueue(thing: T): void {
    if (!this.isFull()) {
      this.queue.push(thing)
    } else {
      throw new Error("Queue is full. Please `.dequeue()` before adding more.")
    }
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  peek(): T | undefined {
    return this.queue[0]
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  isFull(): boolean {
    return this.queue.length === this.maxSize
  }
}

const queue = new Queue<string>(2)
console.log("isEmpty?", queue.isEmpty())
console.log("current queue", queue)

queue.enqueue("string 1")
console.log("isEmpty?", queue.isEmpty())
console.log("current queue", queue)

queue.enqueue("string 2")
console.log("isEmpty?", queue.isEmpty())
console.log("current queue", queue)
console.log("isFull?", queue.isFull())

queue.dequeue()
console.log("isEmpty?", queue.isEmpty())
console.log("current queue", queue)

console.log("what's next in the queue?", queue.peek())

// remove all things and some
queue.dequeue()
queue.dequeue()
// won't break as dequeue handles undefined gracefully
queue.dequeue()
console.log("isEmpty?", queue.isEmpty())

queue.enqueue("new string 1")
queue.enqueue("new string 2")
// this will error out
queue.enqueue("new string 3")
