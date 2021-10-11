/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let len = s.length;
    let num = new Array(26).fill(0);
    let maxn = 0;
    while (right < len) {
        let temp = s[right].charCodeAt() - 'A'.charCodeAt();
        num[temp]++;

        maxn = Math.max(maxn, num[temp]);
        if (right - left + 1 - maxn > k) {
            let leftItem = s[left].charCodeAt() - 'A'.charCodeAt();
            num[leftItem]--;
            left++;
        }
        right++;
    }
    return right - left;
};
// @lc code=end

