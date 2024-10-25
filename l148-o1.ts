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

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next.next;

  // 中間地点を探してリストを2つに分割
  while (fast) {
    slow = slow!.next;
    fast = fast.next?.next || null;
  }

  const mid = slow!.next;
  slow!.next = null;

  const left = sortList(head);
  const right = sortList(mid);

  return merge(left, right);
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 新しいノードを作らずに既存のノードを操作してマージする
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
}

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
