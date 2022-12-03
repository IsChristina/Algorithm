/* 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

示例 1：

输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
示例 2：


输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
示例 3：


输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
示例 4：

输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。 */

function Node(val, next, random){
    this.val = val
    this.next = next
    this.random = random
}

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head){
    if(!head) return head
    let cur = head
    while(cur){
        let tmp = new Node(cur.val)
        tmp.next = cur.next
        cur.next = tmp
        cur = tmp.next
    }
    cur = head
    while(cur){
        if(cur.random){
            cur.next.random = cur.random.next
        }
        cur = cur.next.next
    }
    cur = head.next
    let res = head.next, pre = head
    while(cur.next){
        pre.next = pre.next.next
        cur.next = cur.next.next
        pre = pre.next
        cur = cur.next
    }
    pre.next = null
    return res
}