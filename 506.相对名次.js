/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // 升序排序
    let scoreArr = score.slice();
    scoreArr = scoreArr.sort((a, b) => {return b - a});
    let map = new Map();
    for (let i = 0; i < scoreArr.length; i++) {
        switch(i) {
            case 0: map.set(scoreArr[i], "Gold Medal"); break
            case 1: map.set(scoreArr[i], "Silver Medal"); break
            case 2: map.set(scoreArr[i], "Bronze Medal"); break
            default: map.set(scoreArr[i], (i + 1).toString()) ; break;
        }
    }
    for (let i = 0; i < score.length; i++) {
        score[i] = map.get(score[i]);
    }
    return score;
};
// @lc code=end

