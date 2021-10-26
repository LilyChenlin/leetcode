/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // 两次遍历
    let secretArr = new Array(10).fill(0);
    let guessArr = new Array(10).fill(0);
    let A = 0, B = 0;
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++;
        } else {// 同位不同数
            secretArr[secret[i]]++;
            guessArr[guess[i]]++;
        }
    }

    for (let i = 0; i < secretArr.length; i++) {
        B += Math.min(secretArr[i], guessArr[i]);
    }
    return A + 'A' + B + 'B'
}
// @lc code=end

