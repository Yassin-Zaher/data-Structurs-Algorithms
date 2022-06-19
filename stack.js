class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.buttom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.buttom = newNode;
        } else {
            const headPointer = this.top;
            this.top = newNode;
            this.top.next = headPointer;
        }
        this.length++;
        return this
        
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.buttom === this.top){
            this.buttom = null;
        }
        this.top = this.top.next;
        this.length--;
    }
}