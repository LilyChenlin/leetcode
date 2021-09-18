/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let sArr = s.split("");
    let left = 0, right = s.length - 1;
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    while(left < right) {
        let leftIdx = arr.indexOf(s[left]);
        let rightIdx = arr.indexOf(s[right]);
        if (leftIdx > -1 && rightIdx > -1) {
            let temp = sArr[left];
            sArr[left] = sArr[right];
            sArr[right] = temp;
            left++;
            right--;
        } else if (leftIdx == -1) {
            left++;
        } else if (rightIdx == -1) {
            right--;
        }
    }
    return sArr.join("");
};
// @lc code=end

