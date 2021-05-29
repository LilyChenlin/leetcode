/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

//  暴力解法
// var longestPalindrome = function(s) {
//     // 如何取字符串
//     // 判断该字符串是否是回文字符串
//     let res = '';
//     let len = s.length;
//     let max = 0
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j <= len; j++) {
//             let tempStr = s.substring(i, j);
//             if (isPalindrome(tempStr) && tempStr.length > max) {
//                 res = tempStr;
//                 max = tempStr.length;
//             }
//         }   
        
//     }
//     return res;
// };

// var isPalindrome = (str) => {
//     let len = str.length;
//     let midLen = Math.floor(len / 2);
//     for(let i = 0; i < midLen; i++) {
//         if (str[i] !== str[len - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }


var longestPalindrome = function(s) {
    let len = s.length;
    if (len < 2) {
        return s;
    }

    let maxLen = 1;
    let begin = 0;

    // dp[i][j] 表示s[i,j]是否是回文子串
    let dp = new Array(len).fill(0).map(item => new Array(len).fill(true));

    // 初始化：所有长度为1的子串都是回文字符串
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    for (let L = 2; L <= len; L++) {
        // 左边界
        for (let i = 0; i < len; i++) {
            // 由左边界确定右边界
            let j = i + L - 1;
            if (j >= len) {
                break;
            }

            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen)
}
// @lc code=end

