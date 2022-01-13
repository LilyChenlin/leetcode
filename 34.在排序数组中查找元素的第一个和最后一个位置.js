/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 即找出左边界和右边界值
var searchRange = function (nums, target) {
    let res = [-1, -1];
    let left = 0, right = nums.length - 1;
    let firstIdx = findFirstVal(left, right, target, nums);
    if (nums[firstIdx] === target) {
        let leftIdx = firstIdx, rightIdx = firstIdx;
        while (nums[leftIdx - 1] === target) {
            leftIdx--;
        }
        while (nums[rightIdx + 1] === target) {
            rightIdx++;
        }
        res = [leftIdx, rightIdx]
        return res;
    } else {
        return res;
    }



};

let findFirstVal = (left, right, target, nums) => {
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}


// @lc code=end

