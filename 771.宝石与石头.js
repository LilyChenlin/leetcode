/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 *
 * https://leetcode-cn.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (84.83%)
 * Likes:    616
 * Dislikes: 0
 * Total Accepted:    124.9K
 * Total Submissions: 147.1K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * 
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 
 * 示例 1:
 * 
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 * 
 * 
 * 注意:
 * 
 * 
 * S 和 J 最多含有50个字母。
 * J 中的字符不重复。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsLen = jewels.length;
    let stonesLen = stones.length;
    let map = new Map();
    let res = 0;
    for (let i = 0; i < jewelsLen; i++) {
        map.set(jewels[i], map.has(jewels[i]) ? map.get(jewels[i]) + 1 : 1);
    }
    for (let j = 0; j < stonesLen; j++) {
        if (map.has(stones[j])) {
            res += map.get(stones[j])
        }
    }
    return res;
};
// @lc code=end

