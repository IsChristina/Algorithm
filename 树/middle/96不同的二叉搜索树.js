/* 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

示例 1：

输入：n = 3
输出：5
示例 2：

输入：n = 1
输出：1 */

function numTrees(n){ //记忆化递归
    const memo = new Array(n + 1)
    const recur = (n) => {
        if(n === 0 || n === 1){
            return 1
        }
        if(memo[n]) return memo[n]
        let count = 0
        for(let i = 0;i <= n - 1;i++){
            count += recur(i) * recur(n - i - 1)
        }
        memo[n] = count
        return count
    }
    return recur(n)
}

console.log(numTrees(3))