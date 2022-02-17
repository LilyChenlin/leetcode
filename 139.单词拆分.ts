/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start

// DFS 
// function wordBreak(s: string, wordDict: string[]): boolean {
//     let len = s.length;
//     let memo = new Array(len);
//     let wordSet = new Set(wordDict);

//     let canBreak = (start: number) => {
//         if (start == len) return true;
//         if (memo[start] !== undefined) return memo[start];
//         for (let i = start + 1; i <= len; i++) {
//             let temp = s.slice(start, i);
//             if (wordSet.has(temp) && canBreak(i)) {
//                 memo[start] = true;
//                 return true;
//             }
//         }
//         memo[start] = false;
//         return false;
//     }

//     return canBreak(0);
// };

// BFS
// function wordBreak(s: string, wordDict: string[]): boolean {
//     let len = s.length;
//     let wordSet = new Set(wordDict);
//     let memo = new Array(len);

//     const queue = [0];
//     while (queue.length > 0) {
//         let start = queue.shift();
//         if (memo[start]) continue;
//         memo[start] = true;

//         for (let i = start + 1; i <= len; i++) {
//             let temp = s.slice(start, i);
//             if (wordSet.has(temp)) {
//                 if (i < len) {
//                     queue.push(i);
//                 } else {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// };

// DP
function wordBreak(s: string, wordDict: string[]): boolean {
    let len = s.length;
    let wordSet = new Set(wordDict);
    
    let dp = new Array(len + 1).fill(false);
    dp[0] = 1;

    for (let i = 1; i <= len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (dp[i] == true) break;
            if (dp[j] == false) continue;
            let temp = s.slice(j, i);
            if (wordSet.has(temp)) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len];

};

// @lc code=end

