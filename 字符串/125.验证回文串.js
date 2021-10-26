/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        //让s字符串全转为小写
        s = s.toLowerCase();
        const temp = /^[a-z0-9]*$/;
        const strArr = [];
        for (let i = 0; i < s.length; i++) {
            if (temp.test(s[i])) {
                strArr.push(s[i])
            }
        }
        let slow = 0, fast = strArr.length - 1;
        while (slow < fast) {
            if (strArr[slow] !== strArr[fast]) {
                return false;
            }
            slow++;
            fast--;
        }
        return true;
};
// @lc code=end

