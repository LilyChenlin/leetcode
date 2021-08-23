/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {

    let res = [];
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        } else {
            return b[0] - a[0]
        }
    })

    for (let i = 0; i < people.length; i++) {
        res.splice(people[i][1], 0, people[i])
    }
    return res;
};
// @lc code=end

