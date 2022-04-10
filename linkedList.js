class LinkedList{
    constructor(value){
        this.head = {value : value, next : null}
        this.tail = head
        this.length = 1
    }
    append(value){
        const newNode = {value: value, next: null}
        length += 1
        this.tail.next = newNode
        this.tail = newNode
        return this;
 
    }
    prepend(value){
        //adding a value to the start of our linked List
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
}