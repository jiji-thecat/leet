// insert a node in sorted list
/**
 *
 * summary
 *  insert number in sorted linked list
 * return linkedlist
 * 
 * example
 *  [1,10,20,30], 15->[1,10,15,20,30]
 * 
 * edge
 *  
 * memo
 *  [d,1,10,20,30], 15->[1,10,15,20,30]
 *   i 
 *  [d,1,10,20,30], 35->[1,10,15,20,30,35]
 *              i

 * loop i !== null
 * if num < i.next.val
 *  newNode = newListNode(num)
 *  next = i.next
 *  i.next = newNode
 *  newNode.next=next
 *  break;
 * 
 * i=i.next
 *  
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
      const newNode = new ListNode(num);
      const next = curr.next;
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
