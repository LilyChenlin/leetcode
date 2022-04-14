/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }
    let ans = 0;
    for (let item of map.keys()) {
        if (!map.has(item - 1)) {
            let length = 1, cur = item;
            while (map.has(cur + 1)) {
                length++;
                cur = cur + 1;
            }
            ans = Math.max(length, ans);
        }
    }
    return ans;
};
// @lc code=end

