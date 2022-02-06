/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
    let s = x ^ y, res = 0;
    while (s !== 0) {
        res += s & 1;
        s >>= 1;
    }
    return res;
};
// @lc code=end

