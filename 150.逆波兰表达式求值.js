/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let temp = [];
    for (let i = 0; i < tokens.length; i++) {
        if (chargeCode(tokens[i])) {
            temp.push(tokens[i]);
        } else {
            let len = temp.length;
            let result = typeCodeAndSum(tokens[i], temp[len - 2], temp[len - 1]);
            temp.pop();
            temp.pop();
            temp.push(result)
        }
    }
    return temp[0]
};

var chargeCode = (val) => {
    if (val !== '+' && val !== '-' && val !== '*' && val !== '/') {
        return true;
    }
    return false;
}

var typeCodeAndSum = (code, val1, val2) => {
    val1 = Number(val1)
    val2 = Number(val2)
    let res = 0;
    switch(code) {
        case'+': res = val1 + val2;break;
        case'-': res = val1 - val2;break;
        case'*': res = val1 * val2;break;
        case'/': 
            if (val1 / val2 > 0) {
                res = Math.floor(val1 / val2)
            } else {
                res = Math.ceil(val1 / val2)
            }
            break;
    }
    return res;
}
// @lc code=end

