/**
 * summary
 *  priority queue is a data structure that holds value and priority.
 *  There is a rule that values are sorted according to priority.
 *  If you think it like a binary tree, parent always needs to be smaller than children.(or vice versa)
 *  It is FIFO structure.
 *
 * enqueue
 *  push the value in hash but sort it according to priority(bubbleup)
 *
 * dequeue
 *  pop the first value of hash and push the last value at the first and sort it according to priority. (bubbledown)
 *
 */
export {};
class PriorityQueue<T> {
  private hash: { value: T; priority: number }[] = [];

  enqueue = (value: T, priority: number) => {
    this.hash.push({ value, priority });
    this.bubbleUp();
  };

  /**
   * check hash[parent].priority and hash[last element].priority
   * if last element priority is smaller bubble up. if not do nothing
   */
  bubbleUp = () => {
    let index = this.hash.length - 1;

    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.hash[index].priority > this.hash[parentIndex].priority) {
        return;
      }

      [this.hash[index], this.hash[parentIndex]] = [this.hash[parentIndex], this.hash[index]];
      index = parentIndex;
    }
  };

  peek = () => {
    return this.hash[this.hash.length - 1];
  };

  isEmpty = () => {
    return this.hash.length === 0;
  };

  dequeue = () => {
    if (this.hash.length === 0) {
      return 'hash is empty';
    }
    if (this.hash.length === 1) {
      return this.hash.pop()?.value;
    }

    const top = this.hash[0];
    this.hash[0] = this.hash.pop()!;
    this.bubbleDown();
    return top.value;
  };

  /**
   * big value is on hash[0] so move it to the right place.
   * calculate lChildren and rChildren of the parent[0] and if parent[0] is bigger then exchange with l or rchildren.
   * continue.
   */
  bubbleDown = () => {
    let index = 0;
    const length = this.hash.length;

    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallest = index;

      if (leftChildIndex < length && this.hash[leftChildIndex].priority < this.hash[index].priority) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.hash[rightChildIndex].priority < this.hash[index].priority) {
        smallest = rightChildIndex;
      }
      if (smallest === index) {
        break;
      }

      [this.hash[smallest], this.hash[index]] = [this.hash[index], this.hash[smallest]];
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
