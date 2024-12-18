/***
 Priority Queueとは、優先度付き待ち行列のこと。
優先度とともに、値を配列に記憶していって、一番優先度の高い値が常に一番最初にくるようにする。
親ノードが子ノードより大きい、親ノードが子ノードより小さいていう関係性になっていなくてはいけない

enqueue
 値をとりあえず配列に突っ込んで、bubbleup関数で、一番優先度の高い値が配列の最初に来るようにする。
 bubbleupでは、(index - 1) / 2を使って、親を特定して、親と子のpriorityを比較し、子のが小さければ親と交換っていうのを繰り返していく。

dequeue
　先頭の値をとりあえず取得して、先頭には、配列の最後の値を突っ込む。そして、bubbleDown関数で、一番小さい値が一番上にくるよう調整する
  bubbledownでは、左ノード2*index+1, 右ノード2*index+2を使って、一番最初の値と比べていく。左右ノードのが小さければ、それと親を入れ替える
 
enqueue: O(log n)（ヒープの高さ分調整）
dequeue: O(log n)（ヒープの高さ分調整）
peek: O(1)

* 
 */
class PriorityQueue<T> {
  private heap: { value: T; priority: number }[] = [];

  // 要素を追加する
  enqueue(value: T, priority: number): void {
    const node = { value, priority };
    this.heap.push(node);
    this.bubbleUp();
  }

  // 最小優先度の要素を取り出す
  dequeue(): T | undefined {
    if (this.size() === 0) return undefined;
    if (this.size() === 1) return this.heap.pop()?.value;

    // ヒープの先頭（最小要素）を取り出し、最後の要素を先頭に移動
    const min = this.heap[0].value;
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return min;
  }

  // 最小優先度の要素を確認する（削除しない）
  peek(): T | undefined {
    return this.heap[0]?.value;
  }

  // キューが空かどうか
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // キューのサイズ
  size(): number {
    return this.heap.length;
  }

  // ヒープを上方向に調整, priorityの数小さい(=1)のが一番上にくる。
  private bubbleUp(): void {
    let index = this.heap.length - 1;

    while (index > 0) {
      // 挿入した値の親要素が取得できる
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].priority >= this.heap[parentIndex].priority) break;

      // 親と子を交換
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }

    console.log(this.heap);
  }

  // ヒープを下方向に調整
  // priorityの高い要素が一番上に来ている状態なので、小さい値が一番上にくるように調整する。
  private bubbleDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex].priority < this.heap[smallest].priority) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex].priority < this.heap[smallest].priority) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;

      // 親と最小の子を交換
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
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
