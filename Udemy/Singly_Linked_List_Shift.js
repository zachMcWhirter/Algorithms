class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        // if there are no nodes, return undefined
        if (!this.head) return undefined;
        // store the current head property in a variable
        var currentHead = this.head;
        // set the property to the current head's next property
        this.head = currentHead.next;
        // decrement the length by 1
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        // return the value of the node removed
        return currentHead;
    }
    unshift(val) {
        // create a new node using the value
        var newNode = new Node(val);
        if (this.head) {
            this.head = newNode;
            this.tail = this.head;

        } else {
            // set the node's next 
            newHead.next = this.head;
            // set the head to the new node
            this.head = newNode;
        }
        // increment the length
        this.length++;
        // return the linked list
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
}

/* Sample code to traverse the list, taken from the Udemy course
traverse() {
    var current= this.head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}
*/

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.shift();
console.log(list)
list.unshift("HEY")
console.log(list)