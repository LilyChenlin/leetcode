/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let combinations = [];
    if (digits.length == 0) return combinations;

    let phoneMap = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ])
    backtrack(combinations, phoneMap, digits, 0, '');
    return combinations;
};

/**
 * 穷举方法
 * @param {*} combinations res
 * @param {*} phoneMap 存储的数字对应的字母
 * @param {*} digits 输入
 * @param {*} index 当前遍历到的输入字符串的index
 * @param {*} combination 每次遍历值
 */
var backtrack = (combinations, phoneMap, digits, index, combination) => {
    if (digits.length === index) {
        combinations.push(combination + '')
    } else {
        // 当前遍历到的字母
        const digit = digits[index];
        const letters = phoneMap.get(digit);
        for (let i = 0; i < letters.length; i++) {
            combination += letters[i];
            backtrack(combinations, phoneMap, digits, index + 1, combination);
            combination = combination.substring(0, index)
        }
    }
}
// @lc code=end
