/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiant = [], dire = [];
    let n = senate.length;

    for (let i = 0; i < n; i++) {
        if (senate[i] == 'R') {
            radiant.push(i);
        } else {
            dire.push(i)
        }
    }

    while (radiant.length > 0 && dire.length > 0) {
        if (radiant[0] < dire[0]) {
            radiant.push(radiant[0] + n)
        } else {
            dire.push(dire[0] + n)
        }
        radiant.shift();
        dire.shift();
    }
    return radiant.length ? 'Radiant' : 'Dire'
};
// @lc code=end

