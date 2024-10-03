class MessageQueue<T> {
  private queue: Array<T> = []
  private maxSize: number

  constructor(maxSize: number = Infinity) {
    this.maxSize = maxSize
  }

  enqueue(message: T): void {
    if (!this.isFull()) {
      this.queue.push(message)
    } else {
      throw new Error("Queue is full and can't add anymore messages. Please `.dequeue()` before adding more.")
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


const messageQueue = new MessageQueue<string>(2)

console.log("isEmpty?", messageQueue.isEmpty())
console.log("current message queue", messageQueue)

messageQueue.enqueue("message 1")
console.log("isEmpty?", messageQueue.isEmpty())
console.log("current message queue", messageQueue)

messageQueue.enqueue("message 2")
console.log("isEmpty?", messageQueue.isEmpty())
console.log("current message queue", messageQueue)
console.log("isFull?", messageQueue.isFull())

messageQueue.dequeue()
console.log("isEmpty?", messageQueue.isEmpty())
console.log("current message queue", messageQueue)

console.log("what's next in the queue?", messageQueue.peek())

// remove all things and some
messageQueue.dequeue()
messageQueue.dequeue()
messageQueue.dequeue()
console.log("isEmpty?", messageQueue.isEmpty())


messageQueue.enqueue("new message 1")
messageQueue.enqueue("new message 2")
messageQueue.enqueue("new message 3")
console.log("isEmpty?", messageQueue.isEmpty())
console.log("current message queue", messageQueue)
