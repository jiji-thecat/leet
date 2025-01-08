/**
 * Task
Implement an engine that processes asynchronous callbacks using Javascript.
Your task is to provide the implementation of the QueueProcessingCallback class to meet all the requirements described below.
Requirements
1.You should provide the implementation of the constructor and process methods. Do not change   the names of these methods or the number of arguments they receive.
2.The constructor methods should receive an optional string.The value of the string will be     responsible for the order in which callbacks stored in the queue are processed.The only non-   empty value it can receive is the string "LIFO"(Last In First Out). The default order of       processing callbacks in the queue will be "FIFO"(First In First Out).
3.The process method receives a single asynchronous funtion that should be executed by           following the algorithm described below.
4. If there is currently no asynchronous funtion being executed by the class, the received         callback method should be executed immediately.
5.If there is currently only one asynchronous funtion being executed, the received               callback method should be executed.
6.If there are two asynchronous funtion currently being executed(see MAX_CONCURRENTLY_EXECUTION in the initial code), the callback method should be put in the queue.
7.After one of the currently executed asynchronous funtion is finished.

where there was no argument passed to the constructor the first callback method that was pushed into the queue should be executed(First In First Out).
when the argument passed to the constructor was LIFO:the last callback method that was pushed into the queue should be executed(Last In First Out)

8.The queue can only accept up to five callbacks (see MAX QUEUE_SIZE in the initial code):if the queue already has five callbacks,any incoming callbacks should be discarded and they should not be executed. This limit should not take the currently executing callbacks into account.
Hints

Do not change the way the class exported.
The time and memory complexity of your solution will not be assessed. You should only focus on meeting the requirements.
You can use console.log to debug the output
You are allowed to implement any helper methods or fields In the QueueProcessingCallback class.The only requirements are to follow the constructor and process methods signatures as they are described in points 2 and 3 in the requirements above.
The process method might be called many times with different asynchronous callback method during a test.
Avoid infinite loops!
 * summary
 *  Implement engine process async callback
 *  constructor()
 *    pass LIFO or FIFO
 *  process()
 *    no async or 1 async func executed then execute immediately
 *    if 2 async func executing then put it to queue
 *     after one finish executing
 *       FIFO: exeute first
 *       LIFO: execute last
 *    queue limnit is 5. more than that discard.
 *
 * memo
 *   use arr=[]
 *
 *  if no async or 1async
 *   callback();
 */
const MAX_CONCURRENTLY_EXECUTING = 2;
const MAX_QUEUE_SIZE = 5;
const LIFO = 'LIFO';
const FIFO = 'FIFO';

class QueueProcessingCallback {
  _isFIFO = true;
  _arr = [];

  constructor(queueProcessingOrder) {
    this._isFIFO = queueProcessingOrder === FIFO;
  }

  async process(callbackFns) {
    this._arr.push(callbackFns);

    if (this._arr.length < MAX_CONCURRENTLY_EXECUTING) {
      await this._arr.pop()();
    } else if (this._arr.length < MAX_QUEUE_SIZE) {
      this._isFIFO ? await this._arr[0]() : await this._arr[this._arr.length - 1]();
    }
  }
}

const callback1 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 100)
  );
const callback2 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 150)
  );
const callback3 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 200)
  );
const callback4 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(4);
      resolve();
    }, 250)
  );

const qpc = new QueueProcessingCallback();
const qpcLifo = new QueueProcessingCallback('LIFO');

// no callbacks in the queue; callback1 and callback2 should be executed immediately
// qpc.process(callback1);
// qpc.process(callback2);
// logs '1' after 100ms, logs '2' after 150ms
console.log('-');
// significantly later ...
// callback1 and callback2 are executed immediately; callback3 and callback4 land in the queue
// qpc.process(callback1);
// qpc.process(callback2);
// qpc.process(callback3);
// qpc.process(callback4);
// logs '1' after 100ms, logs '2' after 150ms, logs '3' after 300ms, logs '4' after 400ms

// // significantly later ...
// // callback1 and callback2 are executed immediately; callback3 and callback4 land in the queue
// qpcLifo.process(callback1);
// qpcLifo.process(callback2);
// qpcLifo.process(callback3);
// qpcLifo.process(callback4);
// // logs '1' after 100ms, logs '2' after 150ms, logs '4' after 350ms, logs '3' after 350ms

// // significantly later ...
// // when there are already five callbacks in the queue, the next incoming callbacks should be discarded
// qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
qpc.process(callback1);
// // '1' is logged only seven times
