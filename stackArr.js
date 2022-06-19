class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.arr[this.array.length - 1];
  }

  push(value) {
    this.arr.push(value);
    return this;
  }
  pop() {
    this.array.pop();
  }
}
