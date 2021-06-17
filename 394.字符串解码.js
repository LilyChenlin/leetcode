/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let str = '';
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[') {
            stack.push({str, num});
            str = '', num = '';
        } else if (s[i] == ']') {
            let data = stack.pop();
            str = data.str + str.repeat(data.num);
        } else if (s[i] >= '0' && s[i] <= '9') {
            num = Number(s[i])
        } else {
            str += s[i];
        }
    }
    return str;

};
// @lc code=end

