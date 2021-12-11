/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    let nArr = n.toString().split(''), i = nArr.length - 2;
    while (i >= 0 && nArr[i] >= nArr[i + 1]) {
        i--;
    }

    let j = nArr.length - 1;
    if (i >= 0) {
        while (j >= 0 && nArr[i] >= nArr[j]) {
            j--;
        }
        [nArr[i], nArr[j]] = [nArr[j], nArr[i]]

        let l = i + 1, r = nArr.length - 1;
        while (l < r) {
            [nArr[l], nArr[r]] = [nArr[r], nArr[l]];
            l++;
            r--;
        }
    } else {
        return -1;
    }


    let res = Number(nArr.join(''));
    if (res > Math.pow(2, 31) - 1) return -1;
    return res;

};
// @lc code=end

