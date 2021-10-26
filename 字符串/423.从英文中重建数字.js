/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const num = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    // z => zero
    // w => two
    // u => four
    // x => six
    // g => eight
    // h => three eight
    // f => five four
    // s => six seven
    // i => five six eight nine
    let res = [];
    let match = (char) => (s.match(new RegExp(char,'g')) || []).length;
    res[0] = match('z');
    res[2] = match('w');
    res[4] = match('u');
    res[6] = match('x');
    res[8] = match('g');
    res[3] = match('h') - res[8];
    res[1] = match('o') - res[0] - res[2] - res[4];
    res[5] = match('f') - res[4];
    res[7] = match('v') - res[5];
    res[9] = match('i') - res[5] - res[6] - res[8];
    return res.reduce((str,times,num) => str + num.toString().repeat(times),'')
};
// @lc code=end

