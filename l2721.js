/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    functions.forEach((fn, index) => {
      try {
        // 各関数を呼び出してPromiseを取得
        const promise = fn();
        console.log('hello: %d', index);
        // Promiseが解決したら結果を保存
        promise
          .then((result) => {
            results[index] = result; // 結果を対応するインデックスに保存
            completed++;

            // 全てのPromiseが解決されたらresolve
            if (completed === functions.length) {
              resolve(results);
            }
          })
          .catch(reject); // もしどれか一つのPromiseが失敗したら、即座にreject
      } catch (error) {
        reject(error); // 関数が例外を投げた場合もreject
      }
    });
  });
};

// テストケース
const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 15000)),
];

// 結果を出力
//const promise = promiseAll(functions);
//promise.then(console.log); // [4, 10, 16]

const testArr = [1, 2, [1, 2, 3], [1, 2, 3, [2, 3, 4]]];
console.log(!!null);
