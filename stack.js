class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    if (this.data.length === 0) {
      return "Underflow";
    }

    this.data.pop();
  }
  // Return the topmost element without removing it from the stack.
  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(10);
stack.pop();
stack.peek();
