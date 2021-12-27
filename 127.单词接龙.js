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
var ladderLength = function (beginWord, endWord, wordList) {
    // The First Step
    const wordSet = new Set(wordList);
    if (wordSet.size === 0 || !wordSet.has(endWord)) return 0;
    // Second
    let visited = new Set(),
        beginVisited = new Set(),
        endVisited = new Set(),
        nextLevelVisited = new Set()
    step = 1;
    beginVisited.add(beginWord);
    endVisited.add(endWord)
    const changeWordEveryOneLetter = (word) => {
        let wordArr = word.split('');
        for (let i = 0; i < wordArr.length; i++) {
            const originChar = wordArr[i];

            for (let j = 0; j < 26; j++) {
                let c = String.fromCharCode(j + 97);
                if (originChar == c) continue;
                wordArr[i] = c;
                const nextWord = wordArr.join('');
                if (wordSet.has(nextWord)) {
                    if (endVisited.has(nextWord)) { return true };
                    if (!visited.has(nextWord)) {
                        nextLevelVisited.add(nextWord);
                        visited.add(nextWord)
                    }
                }
            }
            wordArr[i] = originChar;
        }
        return false;
    }

    while (beginVisited.size > 0 && endVisited.size > 0) {
        if (beginVisited.size > endVisited.size) {
            const temp = beginVisited;
            beginVisited = endVisited
            endVisited = temp;
        }

        nextLevelVisited = new Set();
        for (let word of beginVisited) {
            if (changeWordEveryOneLetter(word)) return step + 1;
        }
        beginVisited = nextLevelVisited;
        step++;
    }
    return 0;
};

// @lc code=end

