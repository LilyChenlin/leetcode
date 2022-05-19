/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
var decodeString = function (s) {
    let k = "", stack = [], str = "";
    for (let char of s) {
        if (char >= 0) {
            k += char;
        } else if (char === '[') {
            stack.push({ str: str, k: k });
            str = "", k = "";
        } else if (char === ']') {
            const temp = stack.pop();
            let num = temp.k;
            str = temp.str + str.repeat(num);
        } else {
            str += char;
        }
    }
    return str;
};
// @lc code=end

