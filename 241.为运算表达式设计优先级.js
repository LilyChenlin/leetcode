/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    if (expression.length == 0) return [];
    let result = [];
    let num = 0, index = 0;
    while (index < expression.length && !isOperation(expression[index])) {
        num = num * 10 + Number(expression[index]);
        index++;
    }

    // 遍历到最后，一定是全数字的情况
    if (index === expression.length) {
        result.push(num);
        return result;
    }

    for (let i = 0; i < expression.length; i++) {
        if (isOperation(expression[i])) {
            let left = diffWaysToCompute(expression.substring(0, i));
            let right = diffWaysToCompute(expression.substring(i + 1));

            left.forEach((item) => {
                right.forEach((item2) => {
                    result.push(count(item, expression[i], item2))
                });
            });
        }
    }
    return result;
};

const count = (left, opr, right) => {
    switch (opr) {
        case '-': return Number(left) - Number(right);
        case '*': return Number(left) * Number(right);
        case '+': return Number(left) + Number(right);
    }
    return -1;
}

const isOperation = (str) => {
    return str === '+' || str === '-' || str === '*';
}
// @lc code=end

