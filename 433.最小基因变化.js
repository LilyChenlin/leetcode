/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    let bankSet = new Set(bank);
    if (bankSet.size == 0 || !bankSet.has(end)) { return -1 };

    let queue = [], visited = new Set(), step = 0;
    queue.push(start);
    visited.add(start);

    bankSet.delete(start);

    const isStartEqualEnd = (word) => {
        const wordAdd = word.split('');
        for (let i = 0; i < wordAdd.length; i++) {
            const sChar = wordAdd[i];
            for (let j = 0; j < 26; j++) {
                const c = String.fromCharCode(65 + j);
                if (c === sChar) continue;
                wordAdd[i] = c;
                const str = wordAdd.join('');
                if (bankSet.has(str)) {
                    if (end === str) return true;
                    if (!visited.has(str)) {
                        queue.push(str);
                        visited.add(str)
                    }
                }
            }
            wordAdd[i] = sChar;
        }
        return false;
    }
    while (queue.length > 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const word = queue.shift();
            if (isStartEqualEnd(word)) return step + 1;
        }
        step++;
    }
    return -1;
};
// @lc code=end

