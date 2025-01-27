export {};

class PriorityQueue<T> {
  private heap: { value: T; priority: number }[] = [];

  enqueue = (value: T, priority: number) => {
    this.heap.push({ value, priority });
    this.bubbleUp();
  };

  dequeue = () => {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop()?.value;
    }

    const ans = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();

    return ans.value;
  };

  peek = () => {
    return this.heap[0].value;
  };

  isEmpty = () => {
    return this.heap.length === 0;
  };

  bubbleUp = () => {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index].priority > this.heap[parentIndex].priority) {
        break;
      }

      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  };

  bubbleDown = () => {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex].priority < this.heap[index].priority) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex].priority < this.heap[index].priority) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      index = smallest;
    }
  };
}

const pq = new PriorityQueue<string>();

pq.enqueue('Task 1', 3); // 優先度3
pq.enqueue('Task 2', 2); // 優先度2
pq.enqueue('Task 3', 1); // 優先度1
pq.enqueue('Task 4', 4); // 優先度4

console.log(pq.peek()); // "Task 3"（最小優先度の要素）

console.log(pq.dequeue()); // "Task 3"（取り出す）
console.log(pq.dequeue()); // "Task 2"
console.log(pq.dequeue()); // "Task 1"
console.log(pq.dequeue()); // "Task 4"

console.log(pq.isEmpty()); // true
