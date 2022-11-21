// 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//动态规划+哈希表
function lengthOfLongestSubString(s){
    const dict = new Map()
    let tmp = res = 0
    for(let j=0;j<s.length;j++){
        i = dict.has(s[j])?dict.get(s[j]):-1
        dict.set(s[j],j)
        tmp = tmp<j-i?tmp+1:j-i
        res = Math.max(res,tmp)
    }
    return res

}
