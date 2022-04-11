// TODO : Convert this to a doubly linked list

class DoublyLinkedList {
  constructor(value) {
    this.head = { value: value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }
  //keep it dry don't repeat your self
  traverseToIndex(index) {
    const count = 0;
    const currentNode = this.head;
    while (count !== index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  append(value) {
    const newNode = { value: value, next: null, prev: null };
    length += 1;
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  }
  printList() {
    const ArrNodes = [];
    currentNode = this.head;
    while (currentNode !== null) {
      ArrNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(ArrNodes);
  }

  remove(index) {
    const currentNode = traverseToIndex(index - 1);
    const unwantedNode = currentNode.next;
    const nextNode = unwantedNode.next;
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    this.length--;
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

    const currentNode = this.traverseToIndex(index - 1);
    const nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    /* let count = 0;
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
      count++; */
  }
}
