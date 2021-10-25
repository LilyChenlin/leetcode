/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 类比链表 快慢指针
var findDuplicate = function (nums) {
    let slow = 0, fast = 0;
    slow = nums[slow];
    fast = nums[nums[fast]];

    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    let pre1 = 0, pre2 = slow;
    while (pre1 !== pre2) {
        pre1 = nums[pre1];
        pre2 = nums[pre2];
    }
    return pre1;
};
// @lc code=end

