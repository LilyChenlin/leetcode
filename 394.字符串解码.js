/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let str = "", k = "";
    let stack = [];
    for(let char of s){
        if(char >= 0){
            k += char;
        }else if(char === "["){
            stack.push({str:str, k:k});
            str = "", k = "";
        }else if(char === "]"){
            let data = stack.pop();
            str = data.str + str.repeat(data.k);
        }else{
           str += char;
        }
    }
    return str;
};
// @lc code=end

