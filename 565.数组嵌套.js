/*
 * @lc app=leetcode.cn id=565 lang=javascript
 *
 * [565] 数组嵌套
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let visited = new Array(nums.length).fill(false);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!visited[nums[i]]) {
            let start = nums[i], count = 0;
            do {
                start = nums[start];
                count++;
                visited[start] = true
            } while (start !== nums[i]);
            res = Math.max(res, count);
        }
    }
    return res;
};
// @lc code=end

