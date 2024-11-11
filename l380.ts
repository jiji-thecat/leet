// mapとarrayを使って、最後の要素を巧みに使う。

class RandomizedSet {
  private map;
  private arr: number[];
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  // mapに(val->arr.length-1)をいれていく
  // arrには、valを突っ込んでいく
  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }

    this.arr.push(val);
    this.map.set(val, arr.length - 1);
    return true;
  }

  // move the last value to delete value and pop the last one
  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }

    const deletedIndex = this.map.get(val);
    this.arr[deletedIndex] = this.arr[this.arr.length - 1];
    this.map.set(val, deletedIndex);
    this.arr.pop();
    this.map.delete(val);
    return true;
  }

  // generate random number and return from arr
  getRandom(): number {
    const rand = Math.floor(Math.random() * this.arr.length);
    return this.arr[rand];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
