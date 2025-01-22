
class Node {
    constructor(data) {
        this.data = data;
        this.lchild = null;
        this.rchild = null;
    }
}

class Queue {
    constructor(size = 10) {
        this.front = -1;
        this.rear = -1;
        this.size = size;
        this.Q = new Array(size);
    }

    enqueue(x) {
        if (this.rear === this.size - 1) {
            console.log("Queue Full");
        } else {
            this.rear++;
            this.Q[this.rear] = x;
        }
    }

    dequeue() {
        if (this.front === this.rear) {
            console.log("Queue is Empty");
            return null;
        } else {
            this.front++;
            return this.Q[this.front];
        }
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    createTree() {
        const queue = new Queue(100);
        const prompt = require("prompt-sync")({ sigint: true });

        const rootValue = parseInt(prompt("Enter root value: "));
        this.root = new Node(rootValue);
        queue.enqueue(this.root);

        while (!queue.isEmpty()) {
            const p = queue.dequeue();

            const leftValue = parseInt(
                prompt(`Enter left child of ${p.data} (-1 for no child): `)
            );
            if (leftValue !== -1) {
                const t = new Node(leftValue);
                p.lchild = t;
                queue.enqueue(t);
            }

            const rightValue = parseInt(
                prompt(`Enter right child of ${p.data} (-1 for no child): `)
            );
            if (rightValue !== -1) {
                const t = new Node(rightValue);
                p.rchild = t;
                queue.enqueue(t);
            }
        }
    }

    preorder(p = this.root) {
        if (p) {
            process.stdout.write(p.data + " ");
            this.preorder(p.lchild);
            this.preorder(p.rchild);
        }
    }

    inorder(p = this.root) {
        if (p) {
            this.inorder(p.lchild);
            process.stdout.write(p.data + " ");
            this.inorder(p.rchild);
        }
    }

    postorder(p = this.root) {
        if (p) {
            this.postorder(p.lchild);
            this.postorder(p.rchild);
            process.stdout.write(p.data + " ");
        }
    }

    levelOrder() {
        if (!this.root) return;

        const queue = new Queue(100);
        console.log(this.root.data);
        queue.enqueue(this.root);

        while (!queue.isEmpty()) {
            const node = queue.dequeue();

            if (node.lchild) {
                process.stdout.write(node.lchild.data + " ");
                queue.enqueue(node.lchild);
            }

            if (node.rchild) {
                process.stdout.write(node.rchild.data + " ");
                queue.enqueue(node.rchild);
            }
        }
    }

    height(root = this.root) {
        if (!root) return 0;

        const leftHeight = this.height(root.lchild);
        const rightHeight = this.height(root.rchild);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Main Function
const main = () => {
    const tree = new Tree();
    tree.createTree();

    console.log("Preorder traversal: ");
    tree.preorder();
    console.log("\nInorder traversal: ");
    tree.inorder();
    console.log("\nPostorder traversal: ");
    tree.postorder();
    console.log("\nLevel order traversal: ");
    tree.levelOrder();
    console.log("\nHeight of the tree: ", tree.height());
};

main();
