class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Method to add an element with its priority to the priority queue
  enqueue(element, priority) {
    const newNode = { element, priority };
    this.heap.push(newNode);
    this.heapifyUp();
  }

  // Method to remove and return the element with the highest priority from the priority queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Priority queue is empty');
    }

    const minPriorityNode = this.heap[0];
    const lastNode = this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }
    
    return minPriorityNode.element;
  }

  // Method to return the element with the highest priority without removal
  peek() {
    if (this.isEmpty()) {
      throw new Error('Priority queue is empty');
    }

    return this.heap[0].element;
  }

  // Method to check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Method to maintain the min-heap property by bubbling up the last element
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.heap[parentIndex];

      if (lastNode.priority >= parentNode.priority) {
        break;
      }

      this.heap[index] = parentNode;
      index = parentIndex;
    }

    this.heap[index] = lastNode;
  }

  // Method to maintain the min-heap property by bubbling down the first element
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const firstNode = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestChildIndex = index;

      if (leftChildIndex < length && this.heap[leftChildIndex].priority < this.heap[smallestChildIndex].priority) {
        smallestChildIndex = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex].priority < this.heap[smallestChildIndex].priority) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex === index) {
        break;
      }

      this.heap[index] = this.heap[smallestChildIndex];
      index = smallestChildIndex;
    }

    this.heap[index] = firstNode;
  }
}

// Example usage:
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);

console.log(priorityQueue.peek()); // Output: Task 2

console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.dequeue()); // Output: Task 3
console.log(priorityQueue.dequeue()); // Output: Task 1

console.log(priorityQueue.isEmpty()); // Output: true

