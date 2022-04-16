/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start

function wordBreak(s: string, wordDict: string[]): boolean {
    let len = s.length;
    let memo = new Array(len);
    let wordSet = new Set(wordDict);

    let dfs = (start: number): boolean => {
        if (start === len) return true;
        if (memo[start] !== undefined) return memo[start];
        for (let i = start + 1; i <= len; i++) {
            let temp = s.slice(start, i);
            if (wordSet.has(temp) && dfs(i)) {
                memo[start] = true;
                return true;
            }
        }
        memo[start] = false;
        return false;
    }

    return dfs(0);
};

// @lc code=end

