/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
// 从最长的开始遍历起，排序，最长的字符串放在最前面。
var findLUSlength = function(strs) {
    strs.sort((a, b) => {return b.length - a.length});
    for(let i = 0; i < strs.length; i++){
        if (helper(strs,i)) {
            return strs[i].length;
        }
    }
    return -1;
}

var isSubSequence = (long, small) => {
    if (long.indexOf(small) !== -1) return true;
    let index1 = 0, index2 = 0;
    while (index1 < long.length && index2 < small.length) {
        if (long[index1] == small[index2]) {
            index2++
        }
        index1++;
        if (index2 == small.length) return true;
    }
    return false;
}

var helper = (arr, i) => {
    // 判断是否独一无二
    let flag =  arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]);
    
    // 判断是否是比他长的字符串的子串
    for (let j = 0; j < i; j++) {
        // true -> 是 false -> 不是
        if (isSubSequence(arr[j], arr[i])) {return false};
    }
    return flag;
}
// @lc code=end

