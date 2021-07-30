/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 前缀和相减是k的倍数 那么他们各自除k的余数是相同的
var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) {
        return false;
    }
    let mp = new Map();
    mp.set(0, -1);
    let modNum = 0;
    for (let i = 0; i < nums.length; i++) {
        modNum = (modNum + nums[i]) % k;
        if (mp.has(modNum)) {
            const prevIndex = mp.get(modNum);
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            mp.set(modNum, i)
        }
    }
    return false;
};
// @lc code=end

