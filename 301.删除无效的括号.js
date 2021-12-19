/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    let n = s.length,
        max = -Infinity,
        len = -Infinity, // 记录最长长度
        set = new Set();

    max = getMax(s);

    /**
     * @param {Number} u 当前遍历index
     * @param {Number} score 以分数为0来判断括号合法
     * @param {String} cur
     */
    let dfs = (u, score, cur) => {
        if (score < 0 || score > max) return;
        if (u === n) {
            if (score === 0 && cur.length >= len) {
                if (cur.length > len) set.clear();
                len = cur.length;
                set.add(cur);
            }
            return;
        }

        if (s[u] == '(') {
            dfs(u + 1, score + 1, cur + '(')
            dfs(u + 1, score, cur)
        } else if (s[u] == ')') {
            dfs(u + 1, score - 1, cur + ')')
            dfs(u + 1, score, cur)
        } else {
            dfs(u + 1, score, cur + s[u])
        }

    }
    dfs(0, 0, '');
    return [...set];
};

let getMax = (s) => {
    let l = 0, r = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            l++;
        } else {
            r++;
        }
    }
    let res = Math.min(l, r);
    return res;
}
// @lc code=end

