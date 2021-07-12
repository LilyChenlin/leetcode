/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) {return 0};
    let visit = new Set(), map = new Set();
    for (let n of nums) {
        if (visit.has(n - k)) {
            map.add(n - k);
        } 

        if (visit.has(n + k)) {
            map.add(n);
        }
        visit.add(n);
    }
    return map.size;
};
// @lc code=end

