/**
 * Definition for _Node.
 */
class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

// create a map with {original head, new head} with loop
// next loop, set random value inside map
function copyRandomList(head: _Node | null): _Node | null {
  const dummy = new _Node();
  let pDummy = dummy;
  let pHeader = head;
  const map = new Map();

  while (pHeader) {
    pDummy.next = new _Node(head?.val);
    map.set(head, pDummy.next);
    pHeader = head!.next;
    pDummy = pDummy.next;
  }

  pHeader = head;

  while (pHeader) {
    map.get(pHeader).next = map.get(pHeader.next);
    map.get(pHeader).random = pHeader.random === null ? null : map.get(pHeader.random);
    pHeader = pHeader.next;
  }

  return dummy.next;
}
