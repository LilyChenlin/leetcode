/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = []; // 记录最后全排列的结果
    var track = []; // 记录当前的路径
    
    var backTrack = (nums, track) => {
        // 触发结束条件 
        if (track.length === nums.length) {
            const temp = track.slice();
            res.push(temp);
            return res;
        }

        for (var i = 0; i < nums.length; i++) {
            if (track.indexOf(nums[i]) !== -1) {
                continue;
            }

            track.push(nums[i]);
            backTrack(nums, track);
            track.pop()
        }
    }

    backTrack(nums, track);
    return res;
};
// @lc code=end

