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
    let need = new Map (); 
    for (let i = 0; i < p.length; i++) {
        need.set(p[i], need.has(p[i]) ? need.get(p[i]) + 1 : 1);
    }
    let window = new Map();
    let left = 0, right = 0;
    let valid = 0;
    let result = [];
    while (right < s.length) {
        let a = s[right];
        right++;
        if (need.has(a)) {
            window.set(a, window.has(a) ? window.get(a) + 1 : 1);
            if (window.get(a) === need.get(a)) {
                valid++;
            }
        }

        while (right - left >= p.length) {
            if (valid === need.size) {
                result.push(left);
            }
            let d = s[left];
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.has(d) ? window.get(d) - 1 : -1);

            }
        }

    }
    return result
};
// @lc code=end

