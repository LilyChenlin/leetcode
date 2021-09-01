/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if (isSorted(nums)) return 0;
    // 直接升序
    let copyNums = [...nums].sort((a, b) => a - b);
    let left = 0, right = nums.length -1 ;
    while(nums[left] === copyNums[left]) {
        left++;
    }
    while(nums[right] === copyNums[right]) {
        right--;
    }
    return right - left + 1;
};

const isSorted = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return true;
}

// @lc code=end

