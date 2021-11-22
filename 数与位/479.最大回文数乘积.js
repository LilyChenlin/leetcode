/*
 * @lc app=leetcode.cn id=479 lang=javascript
 *
 * [479] 最大回文数乘积
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    // 构造最大回文数
    if (n == 1) return 9;
    let max = Math.pow(10, n) - 1;
    for (let i = max - 1; i > Math.floor(max / 10); i--) {
        let str = i.toString();
        let res = Number(str + str.split("").reverse().join(""));
        //2. 检验该回文数能否由给定的数相乘得到
        for (let j = max; j * j >= res; j--) {
            if (res % j == 0) return res % 1337;
        }
    }
    return -1;
    
};
// @lc code=end

