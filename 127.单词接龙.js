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
    let wordListSet = new Set(wordList);
    if (wordListSet.size === 0 || !wordListSet.has(endWord)) return 0;
    let visited = new Set(),
        queue = [],
        step = 1;
    
    wordListSet.delete(beginWord);

    visited.add(beginWord);
    queue.push(beginWord);

    const isTheWordEqualEndWord = (word) => {
        const wordArr = word.split('');
        for (let i = 0; i < wordArr.length; i++) {
            const sChar = wordArr[i];
            for (let j = 0; j < 26; j++) {
                const c = String.fromCharCode(j + 97);
                if (c === wordArr[i]) continue;
                wordArr[i] = c;

                const str = wordArr.join('');
                if (wordListSet.has(str)) {
                    if (endWord === str) return true;
                    if (!visited.has(str)) {
                        visited.add(str);
                        queue.push(str)
                    }
                }
            }
            // 复原
            wordArr[i] = sChar;
        }
        return false;
    }

    while (queue.length > 0) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const word = queue.shift();
            if (isTheWordEqualEndWord(word)) { return step + 1 };
        }
        step++;
    }
    return 0;
};

// @lc code=end

