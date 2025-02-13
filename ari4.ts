// insert a node in sorted list
/**
 * summary
 *  insert node in sorted linked list
 *
 * example
 *  [10,20,30], 15->[10,15,20,30]
 *
 * edge
 *  -
 *
 * memo
 *  [d,10,20,30], 15->[10,15,20,30]
 *    c
 * d.next=head
 * curr=d
 *
 * loop curr.next
 *  if(target < curr.next.val)
 *   next = curr.next
 *   newNode = new ListNode(target)
 *   curr.next=newNode
 *   newNode.next=next
 *   break
 *
 *  curr=curr.next
 *
 * if(!curr.next)
 *  curr.next = new ListNode(target)
 *
 * ret dummy.next
 *
 * tc o(n)
 * sc o(1)
 *
 */
export {};
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const solution = (head: ListNode | null, num: number): ListNode | null => {
  const dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;

  while (curr.next) {
    if (num < curr.next.val) {
      const next = curr.next;
      const newNode = new ListNode(num);
      curr.next = newNode;
      newNode.next = next;
      break;
    }

    curr = curr.next;
  }

  if (!curr.next) {
    curr.next = new ListNode(num);
  }

  return dummy.next;
};

const list = new ListNode(1);
list.next = new ListNode(10);
list.next.next = new ListNode(20);
list.next.next.next = new ListNode(30);
const l1 = solution(list, 15);

const list2 = new ListNode(1);
list2.next = new ListNode(10);
list2.next.next = new ListNode(20);
list2.next.next.next = new ListNode(30);

const l2 = solution(list2, 0);

const list3 = new ListNode(1);
list3.next = new ListNode(10);
list3.next.next = new ListNode(20);
list3.next.next.next = new ListNode(30);

const l3 = solution(list3, 35);
console.log(JSON.stringify(l1)); // 1,10,15,20,30
console.log(JSON.stringify(l2)); // 0,1,10,20,30
console.log(JSON.stringify(l3)); // 1,10,20,30,35
