/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    // 首先确定船的最小载量
    var left = getMax(weights);
    var right = getSums(weights) + 1;
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (canFinish(weights, mid, D)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

// cap 船的载量 如果载重为cap，能否在D天内运完？
var canFinish = (weights, cap, D) => {
    var total = 0; // 总共需要几天
    var tempCap = cap;
    for(var i = 0; i < weights.length; i++) {
        tempCap = tempCap - weights[i];
        if (tempCap < weights[i + 1] || weights[i + 1] === undefined) {
            total = total + 1;
            tempCap = cap;
        }
    }
    return total <= D;
};
var getMax = (weights) => {
    var max = 0; 
    for (let value of weights) {
        max = Math.max(value, max);
    }
    return max;
}

// 获得包裹总重量
var getSums = (weights) => {
    var sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }
    return sum;
}
// @lc code=end

