/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let newSet = new Set();
    let stack = [];
    let newMap = new Map();
    for (let i = 0; i < s.length; i++) {
        newMap.set(s[i], newMap.get(s[i]) + 1 || 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (!newSet.has(s[i])) {
            while(stack.length && stack[stack.length - 1] > s[i] && newMap.get(stack[stack.length - 1] ) > 0) {
                newSet.delete(stack.pop());
            }
            newSet.add(s[i]);
            stack.push(s[i])
        }
        newMap.set(s[i], newMap.get(s[i]) -1 || -1);
    }
    return stack.join('');
};
// @lc code=end

