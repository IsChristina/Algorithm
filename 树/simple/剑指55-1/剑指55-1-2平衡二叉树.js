//55-1 二叉树深度
// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

// 例如：

// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

function maxDepth(root){
    if(root === null) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}
//55-2 平衡二叉树
// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 

// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// 返回 false 。
//后序遍历+剪枝
function isBalenceTree(root){
    function recur(root){
        if(root === null) return 0
        let left = recur(root.left)
        if(left === -1) return -1
        let right = recur(root.right)
        if(right === -1) return -1
        return Math.abs(left-right)<=1?Math.max(left,right)+1:-1
    }
    return recur(root)!==-1
}