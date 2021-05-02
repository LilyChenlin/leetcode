/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let arr = timePoints.map(item => {
        let temp = item.split(':')
        return Number(temp[0]*60) + Number(temp[1])
    }).sort((val1, val2) => {
        return val1 - val2
    })

    let len = arr.length
    let min = 1440 - arr[len - 1] + arr[0];
    for (let i = 1; i < len; i++) {
        if (arr[i] - arr[i - 1] < min) {
            min = arr[i] - arr[i - 1]
        }
    }

    return min

};
// @lc code=end

