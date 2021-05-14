/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let index = 0;
    version1 = version1.split(".");
    version2 = version2.split(".");
    let n = Math.max(version1.length,version2.length)
    while (index < n) {
        let code1 = (version1[index]===undefined) ? 0 : parseInt(version1[index]);
        let code2 = (version2[index]===undefined) ? 0 : parseInt(version2[index]);
        if (code1 > code2) {
            return 1;
        } else if (code1 < code2) {
            return -1;
        }
        index++;
    }
    return 0;
};
// @lc code=end

