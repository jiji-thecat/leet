export {};

//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const sortList = (head: ListNode | null): ListNode | null => {};

const log = (head: ListNode | null) => {
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
};

const list = new ListNode(4);
list.next = new ListNode(2);
list.next.next = new ListNode(1);
list.next.next.next = new ListNode(3);
console.log(JSON.stringify(sortList(list)));
