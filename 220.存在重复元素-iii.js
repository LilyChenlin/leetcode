/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i]
        let id = getID(x, t + 1);
        if (map.has(id)) {
            return true;
        }
        if (map.has(id - 1) && Math.abs(x - map.get(id - 1)) <= t) {
            return true;
        }
        if (map.has(id + 1) && Math.abs(x - map.get(id + 1)) <= t) {
            return true;
        }
        map.set(id, x);
        if (i >= k) {
            map.delete(getID(nums[i - k], t + 1))
        }
    }
    return false;
};

const getID = (x, w) => {
    return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
}
// @lc code=end

