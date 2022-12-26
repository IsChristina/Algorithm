/* 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。

子数组 是数组的连续子序列。

示例 1:

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。 */

function maxProduct(nums){
    let maxF = nums[0],minF = nums[0],ans = nums[0]
    for(let i = 1;i < nums.length;i++){
        const mx = maxF,mi = minF
        maxF = Math.max(mx * nums[i],Math.max(nums[i],mi * nums[i]))
        minF = Math.min(mi * nums[i],Math.min(nums[i],mx * nums[i]))
        ans = Math.max(ans,maxF)
    }
    return ans
}
console.log(maxProduct([2,3,-2,4]))