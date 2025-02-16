// Suppose you got two linkedlist: n1 -> n2 -> n3 ... -> n(k) and l1 -> l2 -> l3 -> l(m),
// reorder and get n1 -> l(m) -> n2 -> l(m-1). k and m might have different length,
// connect the remaining nodes to the end if run out. After implementation, write a simple unit testing function.

/**
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export {};
const solution = (l1: ListNode | null, l2: ListNode | null) => {};

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

const l2 = new ListNode(9);
l2.next = new ListNode(8);
l2.next.next = new ListNode(7);
l2.next.next.next = new ListNode(6);

const l3 = new ListNode(1);
l3.next = new ListNode(2);
l3.next.next = new ListNode(3);
l3.next.next.next = new ListNode(4);

const l4 = new ListNode(9);
l4.next = new ListNode(8);

const l5 = new ListNode(1);
l5.next = new ListNode(2);

const l6 = new ListNode(9);
l6.next = new ListNode(8);
l6.next.next = new ListNode(7);
l6.next.next.next = new ListNode(6);

const l7 = new ListNode(9);
l7.next = new ListNode(8);
l7.next.next = new ListNode(7);
l7.next.next.next = new ListNode(6);

const l8 = new ListNode(9);
l8.next = new ListNode(8);
l8.next.next = new ListNode(7);
l8.next.next.next = new ListNode(6);

console.log(JSON.stringify(solution(l1, l2))); // 1,6,2,7,3,8,4,9
console.log(JSON.stringify(solution(l3, l4))); // 1,8,2,9,3,4
console.log(JSON.stringify(solution(l5, l6))); // 1,6,2,7,8,9
console.log(JSON.stringify(solution(null, l7))); // 6,7,8,9
console.log(JSON.stringify(solution(l8, null))); // 9.8,7,6
