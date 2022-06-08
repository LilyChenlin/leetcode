/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
    let right = 1;
    for (let i = 0; i < piles.length; i++) {
        right = Math.max(right, piles[i]);
    }

    let left = 1;
    while (left < right) {
        let mid = left + (right - left) >> 2;
        if (calculateMid(piles, mid) > h) {
            right = mid + 1;
        } else {
            left = mid;
        }
    }
    return left;
};

function calculateMid(piles, k): number {
    let sum = 0;
    for (let i = 0; i < piles.length; i++) {
        sum += piles[i];
    }
    return ~~(sum / k)
}
// @lc code=end

