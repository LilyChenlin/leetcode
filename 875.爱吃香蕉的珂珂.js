/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


var minEatingSpeed = function(piles, h) {
    // 套用探寻左侧边界的算法框架
    var left = 1, right = getMax(piles) + 1;
    // 获取最大值

    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (canFinishPiles(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

// 判断以speed的速度能否在h小时内吃完piles数量
var canFinishPiles = (piles, speed, h) => {
    var time = 0; 
    for (let value of piles) {
        time += timeof(value, speed);
    }
    return time <= h;
}


var timeof = (num, speed) => {
    return Math.floor(num / speed) + ((num % speed ) > 0 ? 1 : 0);
}
// 获得piles数组中的最大值
var getMax = (piles) => {
    var max = 0;
    for (let value of piles) {
        max = Math.max(max, value);
    }
    return max;
}
// @lc code=end

