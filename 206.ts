// 206. Reverse Linked List

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

function reverseList(head: ListNode | null): ListNode | null {
  const stack: Array<ListNode> = [];

  if (head === null) return head;

  for (let i = head; i !== null; i = i.next) {
    stack.push(i);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    stack[i].next = stack[i - 1] ?? null;
  }

  return stack[stack.length - 1];
}
