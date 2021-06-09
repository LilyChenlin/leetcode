/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/(^\s+)|(\s+$)|\s+/g, "",)
    let temp = [];
    // 符号暂存，考虑*/优先级
    let codeTemp = [];
    let flag = '';
    let val2 = '';
    let val1 = '';
    let code = '';
    let numStr = '';
    for (let i = 0; i < s.length; i++) {
        if (isNumber(s[i]) || i == s.length - 1) {
            numStr = numStr + s[i];
            if (codeTemp[0] == '-'){numStr = - (Number(numStr));codeTemp.pop()}
            if (i == s.length - 1) temp.push(numStr);
            if (flag !== '') {
                val2 = temp.pop();
                val1 = temp.pop();
                const addSum = add(flag, val1, val2);
                temp.push(addSum);
                flag = ''
            } else if (temp.length > 1 && (s[i + 1] !== '*' && s[i + 1] !== '/')) {
                val2 = temp.pop();
                val1 = temp.pop();
                const addSum = add('+', val1, val2);
                temp.push(addSum)
            }
        } else {
            temp.push(numStr);
            numStr = '';
            if ((s[i] == '+' || s[i] == '-')) {
                codeTemp.push(s[i])
            } else {
                flag = s[i]
            }
        }
        if (codeTemp.length > 2) {

        }
    }
    if (codeTemp.length > 0 && temp.length > 1) {
        return add (codeTemp[0], temp[0], temp[1])
    }
    return temp[0]
};

var isNumber = (str) => {
    if (str !== '+' && str !== '-' && str !== '*' && str !== '/') {
        return true;
    }
    return false;
}

var add = (code, val1, val2) => {
    val2 = Number(val2)
    val1 = Number(val1)
    let res = 0;
    switch(code) {
        case'+': res = val1 + val2;break;
        case'-': res = val1 - val2;break;
        case'*': res = val1 * val2;break;
        case'/': res = Math.floor(val1 / val2);break;
    }
    return res;
}
// @lc code=end

