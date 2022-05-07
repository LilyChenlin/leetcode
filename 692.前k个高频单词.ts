/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
function topKFrequent(words: string[], k: number): string[] {
    let map = {};

    words.forEach(item => map[item] ? map[item]++ : map[item] = 1);

    // 升序
    return Object.keys(map).sort((a, b) => map[b] === map[a] ?
        (a < b ? -1 : (a > b ? 1 : 0)) : map[b] - map[a]).slice(0, k);
};
// @lc code=end

