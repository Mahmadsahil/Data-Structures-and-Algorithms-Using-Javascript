class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
         this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty'
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue is empty'
        }

        return this.items[0]
    }

    isEmpty() {
        return this.items.lenght === 0;
    }

    size() {
        return this.items.lenght;
    }

    cleare() {
        return this.items.lenght = 0;
    }

}

const queue = new Queue();

// Add data
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// Remove data
queue.dequeue();

// check front value
console.log(queue.front())

// check queue is empty or not
console.log(queue.isEmpty())

// Check size of Queue
console.log(queue.size())

// Clear Queue
console.log(queue.cleare())


console.log(queue);