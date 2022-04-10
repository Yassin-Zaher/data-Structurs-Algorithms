// TODO : Convert this to a doubly linked list

class DoublyLinkedList {
  constructor(value) {
    this.head = { value: value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = { value: value, next: null, prev: null };
    length += 1;
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  }
  prepend(value) {
    // adding a value to the start of our linked List
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    const newNode = { value: value, next: null, prev: null };
    //check params
    if (index > this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    let count = 0;
    let currentNode = this.head;
    let nextNodeHolder = currentNode.next;
    while (currentNode.next) {
      if (index - 1 === count) {
        currentNode.next = newNode;
        newNode.next = nextNodeHolder;
        newNode.prev = currentNode;
        nextNodeHolder.prev = newNode;
        break;
      }
      currentNode = currentNode.next;
      count++;
    }
  }
}
