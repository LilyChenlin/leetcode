/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim()
    let ans = [];
    let num = 0;
    let preSign = '+'
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (isNaN(Number(s[i])) || i == s.length - 1) {
            switch(preSign) {
                case'+' : ans.push(num);break;
                case'-' : ans.push(-num);break;
                case'*' : ans.push(ans.pop() * num);break;
                case'/' : ans.push(ans.pop() / num | 0);break;
            }
            preSign = s[i]
            num = 0;
        } 
    }
    let res = 0;
    while (ans.length) {
        res+=ans.pop()
    }
    return res;
}
// @lc code=end

