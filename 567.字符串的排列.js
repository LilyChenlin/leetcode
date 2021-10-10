/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let need = new Map();
    for (let i = 0; i < s1.length; i++) {
        need.set(s1[i], need.get(s1[i]) + 1 || 1);
    }

    let window = new Map();
    let left = 0, right = 0, len = s2.length;
    let valid = 0;

    while (right < len) {
        let temp = s2[right];
        if (need.has(temp)) {
            window.set(temp, window.get(temp) + 1 || 1);
            if (window.get(temp) === need.get(temp)) {
                valid++;
            }
        }
        right++;
        
        if (right - left >= s1.length) {
            if (valid === need.size) return true;

            let deleteItem = s2[left];
            left++;
            if (need.has(deleteItem)) {
                if (need.get(deleteItem) === window.get(deleteItem)) {
                    valid--;
                }
                window.set(deleteItem, window.get(deleteItem) - 1 || -1);
            }
        }
    }
    return false;

};
// @lc code=end

