/*
 * @lc app=leetcode.cn id=890 lang=typescript
 *
 * [890] 查找和替换模式
 */

// @lc code=start
var findAndReplacePattern = function(words, pattern) {
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        if (match(words[i], pattern) && match(pattern, words[i])) {
            ans.push(words[i])
        }
    }
    return ans;
};

var match = function(word, pattern) {
    let map = new Map();
    for (let i = 0; i < word.length; i++) {
        const a = word[i], b = pattern[i];
        if (!map.has(a)) {
            map.set(a, b);
        } else if (map.get(a) !== b) {
            return false;
        }
    }
    return true;
}
// @lc code=end

