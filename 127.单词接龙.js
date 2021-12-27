/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    let step = 1;
    let queue = [beginWord];

    while (queue.length) {
        const next = [];

        for (let item of queue) {
            if (item === endWord) return step;
            for (let i = 0; i < item.length; i++) {
                
                for (let j = 0; j < 26; j++) {
                    const newWord = item.slice(0, i) + String.fromCharCode(j + 97) + item.slice(i + 1);

                    if (wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord)
                    }
                }
            }
        }
        step++;
        queue = next;
    }
    return 0;
};
// @lc code=end

