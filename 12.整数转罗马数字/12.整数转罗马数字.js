/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// 1994 MCMXCIV
// [1,5) [5, 10) [10, 50) [50, 100) [100, 500) [500, 1000];
var intToRoman = function(num) {
    let result = '';
    let map = new Map();
    map.set(1000, 'M');
    map.set(900, 'CM');
    map.set(500, 'D',);
    map.set(400, 'CD');
    map.set(100, 'C');
    map.set(90, 'XC');
    map.set(50, 'L');
    map.set(40, 'XL');
    map.set(10, 'X');
    map.set(9, 'IX');
    map.set(5, 'V');
    map.set(4, 'IV');
    map.set(1, 'I');

    for (let key of map.keys()) {
            while (num >= key) {
                num = num - key;
                result = result + map.get(key);
            }
    }

    return result;
};
// @lc code=end

