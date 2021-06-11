/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    let stack = [];
    let str = '';
    let flag = '+';
    for (let i = 0; i < s.length; i++) {
        if ((!isNaN(Number(s[i]))) && s[i] !== ' ') {
            // 数字
            str += s[i];
        } else if ((isNaN(Number(s[i]))) && s[i] !== ' ') {
            let temp = Number(str)
            switch(flag) {
                case '+': if(str !== "")stack.push(temp);str = '';break
                case '-': if(str !== "")stack.push(-temp);str = '';break
                case '(': if(str !== "")stack.push(temp);str = '';break;
                default: break
            }

            flag = s[i];
            
        }
    }
    if (str !== '') {
        let res = flag == '+' ? Number(str) : (-Number(str))
        stack.push(res)
    }
    let ans = 0
    while (stack.length) {
        ans += stack.pop()
    }
    return ans;
};
// @lc code=end

