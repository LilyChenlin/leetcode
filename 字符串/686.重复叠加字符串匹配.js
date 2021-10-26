/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let count = 0;
    let temp = a;
    a = "";
    while(a.length <= b.length && a.indexOf(b) == -1) {
        a = a + temp;
        count++;
        if (a.indexOf(b) !== -1) {
            return count;
        }
    }
    if (a.indexOf(b) == -1) {
        a = a + temp;
        count++;
    }
    return  a.indexOf(b) == -1 ? -1 : count;
};

// @lc code=end

