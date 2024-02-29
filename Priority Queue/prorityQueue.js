class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueMicrotask = { element, priority }
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (priority < this.items[i].priority) {
                this.items.splice(i, 0, queueMicrotask);
                added = true;
                break
            }
        }
        if (!added) {
            this.items.push(queueMicrotask);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Priority Queue is empty'
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return 'Priority Queue is empty'
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {

        return this.items.length = 0;
    }

}

let priorityQueue = new PriorityQueue;

// Add data
priorityQueue.enqueue('Task C', 3);
priorityQueue.enqueue('Task A', 1);
priorityQueue.enqueue('Task B', 2);
priorityQueue.enqueue('Task D', 4);

// Front data
console.log('Front', priorityQueue.front());

//Remove data
priorityQueue.dequeue();

console.log('Front', priorityQueue.front());

// Check Priority Queue is empty or not
console.log('Empty : ',priorityQueue.isEmpty());

// Check Size
console.log('Size : ',priorityQueue.size());

// Print all items
console.log(priorityQueue);