class Stack {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow: cannot pop from an empty stack');
    }
    return this.items.pop();
  }

  // Method to return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 10

console.log(stack.isEmpty()); // Output: true

// Attempting to pop from an empty stack will throw an error
// console.log(stack.pop()); // Throws "Stack underflow: cannot pop from an empty stack"
