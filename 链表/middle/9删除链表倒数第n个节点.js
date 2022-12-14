/* 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例 1：


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
 */

/* 思路 快慢指针 初始快慢指针指向头节点 快指针遍历n步 这样快指针和慢指针之间相隔n-1 
然后同时移动快慢指针向后走 当快指针指向尾节点时候 慢指针刚好指向倒数第n个节点
慢指针指向第n个节点前面的一个节点 删除操作更方便 所以初始化让慢指针指向head的前驱 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n){
   let dmy = new ListNode()
   dmy.next = head
   let fast = head,slow = dmy
   for(let i = 0;i < n;i++){
      fast = fast.next
   }
   while(fast){
      slow = slow.next
      fast = fast.next
   }
   slow.next = slow.next.next
   return dmy.next
}