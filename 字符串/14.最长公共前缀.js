/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 解法一
var longestCommonPrefix = function(strs) {
    let str = '';
    const len = strs.length;
    if (len == 0) {
        return str;
    } else if (len == 1) {
        str = strs[0];
        return str;
    } 
    let pre = strs[0], next = strs[1];
    let j = 0;
    while(j < pre.length && j < next.length) {
        if (pre[j] == next[j]) {
            str += pre[j];
            j++;
        } else {
            break;
        }
    }

    if (len > 2) {
        for (let i = 2; i < strs.length; i++) {
            let temp = strs[i];
            let left = 0;
            if (temp.length > 0) {
                while (left < temp.length && left < str.length) {
                    const flag = temp[left] !== str[left];
                    if (flag) {
                        str = str.slice(0, left);
                    }
                    if (left == temp.length - 1 && !flag) {
                        str = temp;
                    }
                    left++;
                }
            } else {
                str = "";
            }

        }
    }
    return str;
};

// 解法二
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return '';
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) { // strs[i].indexOf(prefix) == 0 就意味着前缀是公共前缀
            prefix = prefix.subString(0, prefix.length - 1);
            if (prefix.length == 0) return ""
        }
    }
    return prefix;
}
// @lc code=end

