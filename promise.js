/**
 *
 * setTimeoutはasync functionなので、for文が全て回り切ったあと、最後に実行される。
 * で、今回はvarで宣言されているため、スコープの概念が消えてしまい、i=10の値を出力し続ける。
 * スコープの概念があるletを使うことで解消される。
 * もしくは、asyncをsyncっぽく実行させるために、
 * promiseを返すような関数を生成し、awiat promise()として実行する。
 * そうすると、今実行してくれるので、varでも期待通りに動く。
 */

const solution = async () => {
  for (let i = 0; i < 10; i++) {
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => {
          console.log(i);
          resolve(1);
        }, 1000)
      );
    await promise();
  }
};

const exSolution = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

solution();
