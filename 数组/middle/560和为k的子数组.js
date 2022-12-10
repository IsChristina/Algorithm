// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2

function subArraySum(target){
    const mp = new Map()
    map.set(0,1)
    let count = 0,pre = 0
    for(const num of nums){
        pre += num
        if(map.has(pre - k)){
            count += map.get(pre - k)
        }
        if(map.has(pre)){
            map.set(pre,map.get(pre) + 1)
        }else{
            map.set(pre, 1)
        }
    }
    return count
}