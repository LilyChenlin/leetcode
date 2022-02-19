/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
function numDecodings(s: string): number {
    let len = s.length;
    s = " " + s;
    let fn = new Array(len + 1).fill(0);
    fn[0] = 1;
    for (let i = 1; i <= len; i++) {
        let a = Number(s[i]), b = Number(s[i - 1]) * 10 + Number(s[i]);
        if (1 <= a && a <= 9) {
            fn[i] = fn[i - 1];
        }
        if (10 <= b && b <= 26) {
            fn[i] += fn[i - 2]
        }
    } 
    return fn[len]
};
// @lc code=end

