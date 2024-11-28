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

// merge sort
// divide in the middle
// merge 2 arrays

const merge = (a: ListNode | null, b: ListNode | null): ListNode | null => {
  const dummy = new ListNode(0);
  let p = dummy;

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      [p.next, a] = [a, a?.next || null];
    } else {
      [p.next, b] = [b, b?.next || null];
    }
    p = p.next;
  }

  if (a !== null) {
    p.next = a;
  }
  if (b !== null) {
    p.next = b;
  }

  return dummy.next;
};

const sortList = (head: ListNode | null): ListNode | null => {
  if (head === null || head.next === null) {
    return head;
  }

  let i: ListNode | null = head;
  let j: ListNode | null = head.next.next;

  while (j !== null) {
    i = i!.next;
    j = j.next?.next || null; // j=もし?にひっかかったら、undefinedになる可能性があるので、nullに置き換える必要あり。
  }

  const mid = i!.next;
  i!.next = null;

  return merge(sortList(head), sortList(mid));
};

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
