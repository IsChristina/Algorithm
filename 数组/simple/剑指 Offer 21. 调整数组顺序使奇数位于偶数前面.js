// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。
function exchange(nums){
    let i = 0,j=nums.length-1,tmp
    while(i<j){
        while(i<j && (nums[i] & 1 === 1)) {i++} //&与操作 等于1为奇数 等于0为偶数
        while(i<j && (nums[j] & 1 === 0)) {j--}
        tmp = nums[i]
        nums[i]=nums[j]
        nums[j]=tmp
    }
    return nums
}