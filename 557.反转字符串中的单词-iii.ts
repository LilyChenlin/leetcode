/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
    let sArr = s.split(' ');
    for (let i = 0; i < sArr.length; i++) {
        sArr[i] = reverse(sArr[i]);
    }
    return sArr.join(' ');
};

function reverse(s: string): string{
    let sArr = s.split('');
    let left = 0, right = sArr.length - 1;
    while (left < right) {
        let temp = sArr[left];
        sArr[left] = sArr[right];
        sArr[right] = temp;
        left++;
        right--;
    }
    return sArr.join('');
}
// @lc code=end

