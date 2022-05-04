/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    if (nums == null || nums.length < 2) return nums;
    let queue = [], len = nums.length, result = new Array(len - k + 1);
    for (let i = 0; i < len; i++) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);
        if (queue[0] <= i - k) {
            queue.shift();
        }

        if (i + 1 >= k) {
            result[i + 1 - k] = nums[queue[0]];
        }
    }

    return result;
};
// @lc code=end

