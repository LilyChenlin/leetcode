/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let anchor = 0, write = 0;
    for (let read = 0; read < chars.length; read++) {
        if (read + 1 == chars.length || chars[read + 1] !== chars[read]) {
            chars[write] = chars[read];
            write++;
            if (read > anchor) {
                let len = (read - anchor + 1).toString();
                for (let i = 0; i < len.length; i++) {
                    chars[write++] = len[i];
                }
            }
            anchor = read + 1;
        }
    }
    return write;
};
// @lc code=end

