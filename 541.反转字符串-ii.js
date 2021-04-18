/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

 // 解法一
// var reverseStr = function(s, k) {
//     let sArr =  s.split("");
//     const len = sArr.length;
//     let left = 0, right = Math.min(left + 2 * k - 1, len - 1);
//     while (left < right) {

//         // 判断剩余字符个数
//         let reset = right - left + 1;

//         // 判断区域
//         let l , r;
//         if (reset < k) {
//             l = left;
//             r = right
//         } else {
//             l = left;
//             r = left + k - 1;
//         }

//         while (l < r) {
//             [sArr[l], sArr[r]] = [sArr[r], sArr[l]];
//             l ++;
//             r --;
//         }
//         left += 2 * k;
//         right = Math.min(right + 2 * k, len - 1);

//     }
//     return sArr.join("");
// };

// 解法二
var reverseStr = function(s, k) {
    let sArr = s.split("");
    for (let i = 0; i < sArr.length; i += 2 * k) {
        let left = i, right = Math.min(left + k - 1, sArr.length - 1 );
        while(left < right) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
            left++;
            right--;
        }

    }
    return sArr.join("")
}
// @lc code=end

