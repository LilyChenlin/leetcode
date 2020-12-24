/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 *
 * https://leetcode-cn.com/problems/maximum-number-of-balloons/description/
 *
 * algorithms
 * Easy (63.78%)
 * Likes:    46
 * Dislikes: 0
 * Total Accepted:    15.9K
 * Total Submissions: 24.9K
 * Testcase Example:  '"nlaebolko"'
 *
 * 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
 * 
 * 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：text = "nlaebolko"
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：text = "loonbalxballpoon"
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 输入：text = "leetcode"
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= text.length <= 10^4
 * text 全部由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const set = new Set(['b', 'a', 'l', 'o', 'n']);
    const map = new Map();
    const len = text.length;
    let res = Infinity;
    for (let i = 0; i < len; i++) {
        const str = text[i];
        set.has(str) && map.set(str, map.has(str) ? map.get(str) + 1 : 1);
    }
    if (map.size < 5) return false;
    map.forEach((value, key) => {
        if (key === 'l' || key === 'o') {
            value = Math.floor(value / 2);
        }
        res = Math.min(value, res);
    })
    return res;
};

// @lc code=end

