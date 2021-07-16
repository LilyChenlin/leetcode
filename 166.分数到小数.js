/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator % denominator === 0) return String(numerator / denominator);
    let A = [];
    let map = new Map();
    let loop;// 开始循环的位置
    let a = Math.abs(numerator), b = Math.abs(denominator);
    while (a > 0 && A.length < 1000) {
        const tmp = Math.floor(a / b);
        const res = a - tmp * b;
        A.push(tmp);
        if (map.has(res)) {
            loop = map.get(res);
            break;
        }
        map.set(res, A.length);
        a = res * 10;
    }

    const prefix = numerator * denominator < 0 ? '-' : '';
    if (!loop) return `${prefix}${A[0]}.${A.slice(1).join('')}`
    return `${prefix}${A[0]}.${A.slice(1, loop).join('')}(${A.slice(loop).join('')})`
};
// @lc code=end

