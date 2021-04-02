/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let rotateNum = [];
    let maxNum = Number.MIN_SAFE_INTEGER;
    // 求出旋转数组
    for (let i = 0; i < nums.length; i++) {
        rotateNum = getRotateNums(nums, i);
        maxNum = Math.max(getNumsSum(rotateNum), maxNum)
    }
    return maxNum;
};

var getRotateNums = (nums, k) => {
    if (k === 0) return nums;
    const temp = nums.pop();
    nums.unshift(temp);
    return nums;
}

var getNumsSum = (nums) => {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += i *  nums[i];
    }
    return result;
}
// @lc code=end

