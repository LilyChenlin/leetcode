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
    var need = new Map(); // need记录s1字符串每个字符及其出现的次数
    for (let i = 0; i < s1.length; i++) {
        need.set(s1[i], need.has(s1[i]) ? need.get(s1[i])+ 1 : 1)
    }
    var window = new Map(); // window记录滑动窗口
    var valid = 0; // 记录window中出现符合need字符的次数
    var left = 0, right = 0;
    while(right < s2.length) {
        var c = s2[right];
        right ++; // 右移窗口
        if (need.has(c)) {
            // 如果该字符满足need
            window.set(c, window.has(c) ? window.get(c) + 1 : 1);
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }

        while(right - left >= s1.length) {
            // 判断是否符合
            if (valid === need.size) return true;
            // 收缩左窗口
            
            var d = s2[left];
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.has(d) ? window.get(d) - 1 : -1);
            }

        }

    }
    return false;
};
// @lc code=end

