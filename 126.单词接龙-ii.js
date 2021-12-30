/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

 // BFS 得出单词的所有邻接表
 // DFS 算出最短路径集合
var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    wordSet.add(beginWord);
    if (!wordSet.has(endWord)) return [];

    const levelMap = new Map(); // 记录层级信息
    const wordMap = new Map(); // 存放图中单词的邻接单词
    const visited = new Set();
    const queue = [beginWord];
    visited.add(beginWord);

    let finished = false,
        level = 0; // 记录当前单词位于哪一层级

    levelMap.set(beginWord, level);

    // 通过BFS遍历得到单词的所有邻接单词

    while (queue.length > 0) {
        const levelSize = queue.length; // 得到当前层数的所有单词数
        level++;
        for (let i = 0; i < levelSize; i++) {
            const word = queue.shift();

            for (let k = 0; k < word.length; k++) {
                for (let j = 0; j < 26; j++) {
                    // 拼接新单词
                    const newWord = word.slice(0, k) + String.fromCharCode(97 + j) + word.slice(k + 1);
                    if (!wordSet.has(newWord)) continue;

                    // 构造单词的邻接单词表
                    if (wordMap.has(word)) {
                        wordMap.get(word).push(newWord);
                    } else {
                        wordMap.set(word, [newWord])
                    }

                    if (visited.has(newWord)) continue;

                    if (newWord === endWord) finished = true;

                    levelMap.set(newWord, level);

                    queue.push(newWord);
                    visited.add(newWord)
                }
            }

        }
    }

    if (!finished) return [];

    const res = [];

    const dfs = (path, beginWord, word) => {
        if (beginWord === word) {
            res.push([beginWord, ...path]);
            return;
        }

        path.unshift(word);

        if (wordMap.get(word)) {
            for (const parent of wordMap.get(word)) {
                if (levelMap.get(parent) + 1 === levelMap.get(word)) {// 最短路径
                    dfs(path, beginWord, parent);
                }
            }
        }

        path.shift();

    }
    dfs([], beginWord, endWord);
    return res;

};


// @lc code=end

