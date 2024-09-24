class Calculator {
  _num;
  /**
   * @param {number} value
   */
  constructor(value) {
    this._num = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this._num = this._num + value;
    return this._num;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this._num = this._num - value;
    return this._num;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this._num = this._num * value;
    return this._num;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }

    this._num = this._num / value;
    return this._num;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    let result = this._num;
    for (let i = 0; i < value; i++) {
      result *= this._num;
    }

    this._num = result;

    return this._num;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this._num;
  }
}
