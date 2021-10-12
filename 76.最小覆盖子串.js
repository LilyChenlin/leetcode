/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    let need = new Map();
    for (let i = 0; i < t.length; i++) {
        need.set(t[i], need.get(t[i]) + 1 || 1);
    }
    let left = 0, right = 0, len = Infinity, valid = 0, start = 0;
    let window = new Map();
    while (right < s.length) {
        let r = s[right]; 
        if (need.has(r)) {
            window.set(r, window.get(r) + 1 || 1);
            if (window.get(r) === need.get(r)) {
                valid++;
            }
        }
        right++;

        while (need.size === valid) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            let d = s[left];
            if (need.has(d)) {
                if (need.get(d) === window.get(d)) valid--;
                window.set(d, window.get(d) - 1 || -1);
            }
            left++;
        }
    }
    return len == Infinity ? '' : s.substr(start, len);
};
// @lc code=end

