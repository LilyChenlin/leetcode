/*
 * @lc app=leetcode.cn id=275 lang=typescript
 *
 * [275] H 指数 II
 */

// @lc code=start
function hIndex(citations: number[]): number {
    let len = citations.length, left = 0, right = citations.length;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (citations[mid] >= (len - mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return citations[left] >= len - left ? len - left : 0;
};
// @lc code=end

