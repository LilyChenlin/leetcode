/*
 * @lc app=leetcode.cn id=457 lang=javascript
 *
 * [457] 环形数组是否存在循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (checked(i, n , nums)) return true;
    }
    return false;
};
var checked = (start, n, nums) => {
    let cur = start;
    let flag = nums[cur] > 0;
    // 标记遍历过的数量
    let k = 1;
    while (true) {
        const next = (((cur + nums[cur]) % n) + n) % n;
        if (k > n) return false;
        if (flag && nums[next] < 0) return false;
        if (!flag && nums[next] > 0) return false;
        if (next == start) return true;
        cur = next;
        k++;
    }
}
// @lc code=end

