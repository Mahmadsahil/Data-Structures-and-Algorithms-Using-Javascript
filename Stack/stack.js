class Stack {
    constructor() {
        this.item = [];
    }

    push(element) {
        return this.item.push(element);
    }

    pop() {
        return this.item.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty'
        }
        return this.item[this.item.length - 1];
    }

    isEmpty() {

        return this.item.length === 0;
    }

    size() {
        return this.item.length;
    }

    clear() {
        return this.item.length = [];
    }

}

const stack = new Stack();

// Pushing data into Stack
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// Removing data from end of Stack
// stack.pop(1);

// eading peek data of Stack
console.log(stack.peek());

// Size of Stack
console.log(stack.size());

// Checis stack empty or not
console.log(stack.isEmpty());

// Clearing Stack
// console.log(stack.clear());

console.log(stack);