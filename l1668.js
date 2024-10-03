/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let repeatNum = Math.floor(sequence.length / word.length);
  let repeat = '';
  for (let i = 0; i < repeatNum; i++) {
    repeat += word;
  }

  console.log('repeatNum: %d', repeatNum);
  // console.log('repeat: %s', repeat);
  while (repeatNum > 0) {
    console.log('repeat: %s', repeat);

    if (sequence.includes(repeat)) {
      return repeatNum;
    } else {
      repeatNum--;
      repeat = repeat.slice(word.length);
    }
  }

  return 0;
};

const sequence = 'bbba';
const word = 'a';

const testSync = async () => {
  console.log('timeout start');
  await setTimeout(() => {
    console.log('help');
  }, 1000);
  console.log('timeout end');
};

console.log(maxRepeating(sequence, word));
testSync();
