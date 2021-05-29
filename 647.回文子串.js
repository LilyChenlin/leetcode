/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 暴力解法
var countSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let subTemp = s.substring(i, j);
            if (isPanlind(subTemp)) {
                count++;
            }
        }
    }
    return count;
};

var isPanlind = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// @lc code=end

