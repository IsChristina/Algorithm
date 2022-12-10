/* 给你一个整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

示例 1：

输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3                              r
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
示例 2：

输入：nums = [1], target = 1
输出：1 */

function findTargetSumWays(nums,target){
    let sum = 0
    for(let num of nums){
        sum += num
    }
    let diff = sum - target
    if(diff < 0 || diff % 2 !== 0) return 0
    const neg = Math.floor( diff / 2)
    const dp = new Array(neg + 1).fill(0)
    dp[0] = 1
    for(let num of nums){
        for(let j = neg;j >= num;j--){
            dp[j] += dp[j-num]
        }
    }
    return dp[neg]
}

console.log(findTargetSumWays([1,1],0))