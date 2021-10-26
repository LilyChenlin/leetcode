/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countA = 0;
    let countB = 0;
    let temp = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            countA++;
        }
        if (s[i] == 'L' && s[i + 1] == 'L') {
            temp++;
        } else if (s[i] == 'L') {
            temp = temp + 1;
            countB = Math.max(countB, temp);
            temp = 0;
        }

    }
    return countA <= 1 && countB <= 2;
};
// @lc code=end

