/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let nc = new Map(), tail = new Map();
    for (let item of nums) {
        nc.set(item , (nc.get(item) + 1 || 1))
    }

    for (let num of nums) {
        if (nc.get(num) === 0) continue;
        else if (nc.get(num) > 0 && tail.get(num - 1) > 0) {
            nc.set(num, (nc.get(num) - 1 || 0));
            tail.set(num - 1, (tail.get(num - 1) - 1 || 0));
            tail.set(num, (tail.get(num) + 1 || 1));
        } else if (nc.get(num) > 0 && nc.get(num + 1) > 0 && nc.get(num + 2) > 0 ) {
            nc.set(num, (nc.get(num) - 1 || 0))
            nc.set(num + 1, (nc.get(num + 1) - 1 || 0))
            nc.set(num + 2, (nc.get(num + 2) - 1 || 0))
            tail.set(num + 2, (tail.get(num + 2) + 1 || 1));
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end

