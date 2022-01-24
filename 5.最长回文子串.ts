/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// 暴力法
// function longestPalindrome(s: string): string {
//     let maxLength = 0, str = s[0];
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             let temp = s.substring(i, j + 1);
//             if(isPalind(temp) && temp.length> maxLength) {
//                 str = temp;
//                 maxLength = temp.length;
//             }
//         }
//     }
//     return str;
// };

// let isPalind = (str: string): boolean => {
//     const mid = Math.floor(str.length / 2);
//     let prev = 0, next = 0;
//         if (str.length % 2 === 0) {
//         prev = mid - 1;
//         next = mid;
//         } else {
//         prev = mid - 1;
//         next = mid + 1;
//     }

//     while (prev >= 0 && next < str.length) {
//         if (str[prev] !== str[next]) {
//             return false;
//         } else {
//             prev--;
//             next++;
//         }
//     }
//     return true;
// }

// 中心扩散法
function longestPalindrome(s: string): string {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        let str1 = expandFromMid(s, i, i);
        let str2 = expandFromMid(s, i, i + 1);
        
        str = str1.length > str.length ? str1 : str;
        str = str2.length > str.length ? str2 : str;
    }
    return str
}

function expandFromMid (str: string, left: number, right: number): string {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
        left--;
        right++;
    }
    return str.substring(left + 1, right);
}
 // @lc code=end

