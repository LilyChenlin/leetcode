/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let left = 0, right = 0, len = s.length;

    for (let i = 0; i < len; i++) {
        left += s[i] == ')' ? -1 : + 1;
        right += s[len - 1 - i] == '(' ? -1 : +1 ;
        if(left < 0 || right < 0) return false;
    }
    return true
};
// @lc code=end

