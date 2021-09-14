/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [], count = 0;
    if (num.length <= k) {return '0'};
    for (let i = 0; i < num.length; i++) {
        while(stack.length && stack[stack.length - 1] > num[i] && count < k) {
            stack.pop();
            count++;
        }
        stack.push(num[i])
    }

    stack = stack.slice(0, num.length - k);
    
    let ans = "";
    let isLeadingZero = true;
    for (const digit of stack) {
        if (isLeadingZero && digit === '0') {
            continue;
        }
        isLeadingZero = false;
        ans += digit;
    }

    return ans === '' ? '0' : ans;
};
// @lc code=end

