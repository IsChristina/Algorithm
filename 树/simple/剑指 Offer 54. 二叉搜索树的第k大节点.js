// 给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:

// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 4

var kthlargest = function(root,k){
    let res;
     function dfs(root){
        if(root === null) return 
        dfs(root.right)
        if(k === 0) return
        k = k-1
        if(k === 0) res = root.val
        dfs(root.left)
     }
     dfs(root)
     return res
}