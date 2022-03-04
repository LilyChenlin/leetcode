/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let ans = 0, len = s.length, start = 0, end = 0;
    let map = new Map();
    while (end < len) {
        // 重复
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        ans = Math.max(ans, end - start + 1)
        map.set(s[end], end)
        end++;

    }
    return ans;
};
// @lc code=end

