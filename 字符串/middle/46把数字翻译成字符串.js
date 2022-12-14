// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

var translateNum = function(num){
    let a=1,b=1,x,y=num%10
    while(num!==0){
        num = Math.floor(num/10)
        x=num%10
        let tmp = x*10+y
        let c = (tmp>=10&&tmp<=25)?a+b:a
        b=a
        a=c
        y=x
    }
    return a
}