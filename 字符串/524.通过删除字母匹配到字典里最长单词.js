/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    // 定义一个数组存储所有满足的值
    let result = [];
    dictionary.sort();
    let max = -Infinity;
    let res = '';
    for (let i = 0; i < dictionary.length; i++) {
        let t = dictionary[i]
        let len = isSubsequence(t, s) ? t.length : -Infinity;
        if (len > max) {
            max = len;
            res = t;
        }
    }
    return res;

};

// t是否是s的子串
var isSubsequence = function (t, s) {
    let tlen = t.length, slen = s.length;
    let tIndex = 0, sIndex = 0;
    while (tIndex < tlen && sIndex < slen) {
        if (t[tIndex] == s[sIndex]) {
            tIndex++;
        }
        sIndex++;
    }
    return tIndex == t.length;
}

// @lc code=end

