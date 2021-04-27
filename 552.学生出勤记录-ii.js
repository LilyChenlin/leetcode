/*
 * @lc app=leetcode.cn id=552 lang=javascript
 *
 * [552] 学生出勤记录 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const m = 1000000007; 
    let P = new Array(n).fill(0);
    let A = new Array(n).fill(0);
    let L = new Array(n).fill(0);
    P[0] = 1;
    L[0] = 1;
    L[1] = 3;
    A[0] = 1;
    A[1] = 2;
    A[2] = 4;
    if( n == 1) return 3;
    for (let i = 1; i < n; i++) {
        A[i - 1] %= m;
        P[i - 1] %= m;
        L[i - 1] %= m;
        P[i] = ((A[i - 1] + P[i - 1]) % m + L[i - 1]) % m;
        if(i > 1) L[i] = ((A[i - 1] + P[i - 1]) % m + (A[i - 2] + P[i - 2]) % m) % m;
        if(i > 2) A[i] = ((A[i - 1] + A[i - 2]) % m + A[i - 3]) % m;
    }
    return ((A[n - 1] % m + P[n - 1] % m) % m + L[n - 1] % m) % m;
};
// @lc code=end

