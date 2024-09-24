class EventEmitter {
  subscMap = new Map();
  id = 0;
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.subscMap.has(eventName)) {
      this.subscMap.get(eventName)[++this.id] = callback;
    } else {
      const obj = {};
      obj[++this.id] = callback;
      this.subscMap.set(eventName, obj);
    }

    return {
      unsubscribe: () => {
        if (this.subscMap.has(eventName)) {
          console.log(this.subscMap);
          this.subscMap.get(eventName)[this.id] = undefined;
          console.log(this.subscMap);
        }

        return undefined;
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.subscMap.has(eventName)) {
      return [];
    }

    const result = [];
    const obj = this.subscMap.get(eventName);
    for (let key in obj) {
      if (obj[key] === undefined) continue;
      result.push(obj[key](...args));
    }

    return result;
  }
}

const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit('onClick')); // []
