/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let stack = [];
        stack.push(0);
        let result = 0;
    
        let string  = input.split('\n');
    
        for (let i=0; i< string.length; i++) {
    
            //求/t的个数
            let level  = string[i].lastIndexOf('\t')+1;
    
            //判断是否出栈，不同路径的就出栈
            while (level + 1 < stack.length) {
                stack.pop();
            }
            let length = stack[stack.length-1] + (string[i].length - level +1);
            stack.push(length);
            if (string[i].includes('.')) {
                result = Math.max(result, length -1);
            }
        }
        return result;
    };
// @lc code=end

