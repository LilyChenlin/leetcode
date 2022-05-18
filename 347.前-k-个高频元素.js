/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
var topKFrequent = function (nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
    }

    map = Object.keys(map).sort((a, b) => map[b] - map[a]);
    return map.slice(0, k)
};
// @lc code=end

