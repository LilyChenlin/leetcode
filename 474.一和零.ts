/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
function findMaxForm(strs, m, n){
    let dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));
    dp[0][0] = 0;
    
    for (let i = 0; i < strs.length; i++) {
        let zeroAndOne = calcZeroAndOne(strs[i]);
        let zeros = zeroAndOne[0], ones = zeroAndOne[1];
        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
            }
        }
    }
    return dp[m][n]
};

function calcZeroAndOne (str){
    let zeroNum = 0, oneNum = 0;
    for (let i = 0; i < str.length; i++) {  
        if (str[i] === '0') {
            zeroNum++;
        } else {
            oneNum++;
        }
    }
    return [zeroNum, oneNum];
}
// @lc code=end

