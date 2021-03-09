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
    let need = new Map(); // need记录t中每个字符出现的个数
    for (let i = 0; i < t.length; i++) {
        need.set(t[i], need.has(t[i]) ? need.get(t[i]) + 1 : 1)
    }
    let window = new Map(); // window记录滑动窗口中字符出现的个数
    let left = 0, right = 0;
    let valid = 0; // valid表现窗口中满足need条件的字符个数
    let start = 0, len = Infinity; //最小覆盖子串的起始

    while(right < s.length) {
        // 准备移入到滑动窗口的字符
        let c = s[right];
        right ++;
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 1)
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }

        // 说明此时已经初步选出覆盖子串了，考虑缩小left
        while(valid === need.size) {
            // 更新最小字符串
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            let d = s[left];
            // 左移
            left++;
            if(need.has(d)) {
                if (window.get(d) === need.get(d)) valid--;
                window.set(d, window.has(d) ? window.get(d) - 1 : -1)
            }
        }
    }
    return len == Infinity ?
    "" : s.substr(start, len);
};
// @lc code=end

