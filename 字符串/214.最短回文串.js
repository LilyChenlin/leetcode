/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

const shortestPalindrome = (s) => {
    const len = s.length;
    const rev_s = s.split('').reverse().join('');
    for (let i = len; i >= 0; i--) {
        if (s.substring(0, i) == rev_s.substring(len - i)) {
        return rev_s.substring(0, len - i) + s;   // 返回 b + ananab
    }
    }
}

// @lc code=end

