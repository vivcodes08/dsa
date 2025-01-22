
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(x) {
        let t = new Node(x);
        if (!t) {
            console.log("Queue Overflow");
        } else {
            if (this.front === null) {
                this.front = t;
                this.rear = t;
            } else {
                this.rear.next = t;
                this.rear = t;
            }
        }
    }

    dequeue() {
        let x = -1;
        if (this.isEmpty()) {
            console.log("Queue Underflow");
        } else {
            let p = this.front;
            this.front = this.front.next;
            x = p.data;
        }
        return x;
    }

    isEmpty() {
        return this.front === null;
    }

    display() {
        let p = this.front;
        let result = "";
        while (p) {
            result += p.data;
            p = p.next;
            if (p) {
                result += " <- ";
            }
        }
        console.log(result);
    }
}

// Main function equivalent
let A = [1, 3, 5, 7, 9];

let q = new Queue();

for (let i = 0; i < A.length; i++) {
    q.enqueue(A[i]);
}

q.display();

for (let i = 0; i < A.length; i++) {
    q.dequeue();
}

q.dequeue();
