/*
 * @lc app=leetcode.cn id=481 lang=javascript
 *
 * [481] 神奇字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    let index = 1;
    let str = '';
    str += '1';
    while (str.length < n) {
        if (index == str.length) {
            str = str + (str[str.length - 1] == '1' ? "22" : "1");
            index++;
        } else {
            if (str[str.length - 1] == '1') {
                str = str + (str[index++] == '1' ? '2' : '22');
            } else {
                str = str + (str[index++] == '1' ? '1' : '11');
            }
        }
        
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] == '1'){
            count++;
        }
    }
    return count;
};
// @lc code=end

