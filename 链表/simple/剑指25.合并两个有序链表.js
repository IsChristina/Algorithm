// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// 限制：

// 0 <= 链表长度 <= 1000

var mergeTwoList = funtion(l1,l2){
    const prev = new ListNode(-1);
    let pre = prev;
    while(l1 && l2){
        if(l1.val <= l2.val){
            pre.next = l1;
            l1 = l1.next;
        }else{
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next
    }
    pre.next = l1 === null? l2:l1;
    return prev.next;

}