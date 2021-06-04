/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n == 1) return true;
    if (n <= 0) return false;
    let flag = true;

    var loop = (num) => {
        let arr = [5, 3, 2];
        for (let i = 0; i < arr.length; i++) {
            if (num % arr[i] !== 0) {// 整除
                flag = false;
                continue;
            } else {
                flag = true;
                return num / arr[i];
            }
        }
        return num;
    }

    while (n > 0 && flag) {
        if (n == 2 || n == 3 || n == 5) {
            return true
        }
        n = loop(n);

    }
    return flag
};

// @lc code=end

