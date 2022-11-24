// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

// 示例:

// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
// 说明:  

// 1 是丑数。
// n 不超过1690。

//动态规划

var nthUglyNum = function(n){
    let a =0,b=0,c=0,dp=[] //dp表示丑数序列 
    dp[0] = 1
    for(let i =0;i<n;i++){
        let x2 = dp[a]*2,x3 = dp[b]*3,x5=dp[c]*5
        dp[i] = Math.min(Math.min(x2,x3),x5)
        if(dp[i] === x2) a++
        if(dp[i] === x3) b++
        if(dp[i] === x5) c++
    }
    return dp[n-1]

}