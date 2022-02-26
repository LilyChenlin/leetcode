/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
// 双指针
function isSubsequence(s: string, t: string): boolean {
    let i = 0, j = 0, sLen = s.length, tLen = t.length;
    while (i < sLen && j < tLen) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i == s.length;
};

// DP
// @lc code=end

