{
  // じっさいに問題を解く場合、Setとかは使わないほうがいいのではと思うけど、、、でも、こういう解き方もあるんだな程度で理解しておけばいいかな。
  //  const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3); のところは役立つ。数独の3x3をボックスととらえて、そこに入れていく解法。
  function isValidSudoku(board: string[][]): boolean {
    const set = new Set();

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const cell = board[i][j];

        if (cell === '.') continue;

        const row = `row: ${i}, value: ${cell}`;
        const column = `column: ${j}, value: ${cell}`;
        const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
        const box = `boxNumber: ${boxNumber}, value: ${cell}`;

        if (set.has(row) || set.has(column) || set.has(box)) return false;

        set.add(row).add(column).add(box);
        console.log(set);
      }
    }
    return true;
  }

  const board = [
    ['.', '8', '7', '6', '5', '4', '3', '2', '1'],
    ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['9', '.', '.', '.', '.', '.', '.', '.', '.'],
  ];

  const board2 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];

  console.log(isValidSudoku(board2) ? 'T' : 'F');
}
