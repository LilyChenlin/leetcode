/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0, right = 0;
    let need = new Map();
    for (let i = 0; i < p.length; i++) {
        need.set(p[i], need.get(p[i]) + 1 || 1)
    }
    let result = [];
    let valid = 0; // 验证字母是否都满足
    let window = new Map();
    while (right < s.length) {
        let temp = s[right];
        if (need.has(temp)) {
            window.set(temp, window.get(temp) + 1 || 1);
            if (window.get(temp) === need.get(temp)) {
                valid++;
            }
        }
        right++;
        if (right - left >= p.length) {
            if (valid === need.size) {
                result.push(left);
            }
            let d = s[left];
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1 || -1)
            }
        }
    }
    return result;
};
// @lc code=end

