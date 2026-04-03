// 142. Linked List Cycle II

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const firstNode = new ListNode(3);
const secondNode = new ListNode(2);
const thirdNode = new ListNode(0);
const fourthNode = new ListNode(-4);

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = secondNode;

const visited = new Set<ListNode>();

function detectCycle(head: ListNode | null): ListNode | null {
  while (head?.next) {
    if (visited.has(head.next)) {
      return head.next;
    }
    if (head.next) {
      visited.add(head);
      head = head.next;
    }
  }
  return null;
}

console.log(detectCycle(firstNode));
