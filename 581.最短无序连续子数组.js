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
    let start = 0, end = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] < nums[i]) {
            if (count === 0) {
                start = i;
                count++;
            };
            end = i + 1;
            swap(i, i + 1, nums);
            let j = i;
            while ((nums[j] < nums[j - 1]) && j > 0) {
                if (start >= j - 1) start = j - 1;
                swap(j - 1, j, nums);
                j--;
            }
        }
    }

    return end - start === 0 ? 0 : end - start + 1;
};

var swap = (left, right, nums) => {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}
// @lc code=end

