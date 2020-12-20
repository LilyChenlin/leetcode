/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (63.74%)
 * Likes:    220
 * Dislikes: 0
 * Total Accepted:    76.2K
 * Total Submissions: 109.6K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "", t = "y"
 * 输出："y"
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "a", t = "aa"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "ae", t = "aea"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s 和 t 只包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sArr = s.split('');
    const tArr = t.split('');
    const map = new Map();
    for (let i = 0; i < sArr.length; i++) {
        const sKey = sArr[i];
        if(!map.has(sKey)) {
            map.set(sKey, 1);
        } else {
            map.set(sKey, map.get(sKey) + 1)
        }
    }
    for (let j = 0; j < tArr.length; j++) {
        const val = map.get(tArr[j]);
        if (val == 0 || val == undefined) {
            return tArr[j]
        } else {
            map.set(tArr[j], val - 1)
        }
    }
};
 // @lc code=end

