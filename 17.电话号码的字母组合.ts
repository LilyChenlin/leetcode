/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start

// 解法一
// function letterCombinations(digits: string): string[] {
//     let obj = {
//         2: 'abc',
//         3: 'def',
//         4: 'ghi',
//         5: 'jkl',
//         6: 'mno',
//         7: 'pqrs',
//         8: 'tuv',
//         9: 'wxyz',
//     };

//     let ans = [];
//     for (let i = 0; i < digits.length; i++) {
//         let num = Number(digits[i]);
//         let str = obj[num];
//         ans = concatStr(ans, str);
//     }
//     return ans;
// };

// let concatStr = (str1: string[], str2: string): string[] => {
//     if (str1.length == 0) return str2.split('');
//     let len1 = str1.length, len2 = str2.length;
//     let res = [];
//     for (let i = 0; i < len2; i++) {
//         for (let j = 0; j < len1; j++){
//             const str = str1[j] + str2[i];
//             res.push(str);
//         }
//     }
//     return res;
// }

// 解法二 dfs
function letterCombinations(digits: string): string[] {
    if (digits.length == 0) return [];
    let obj = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    let res = [];
    let dfs = (i, combination) => {
        if (i > digits.length - 1) {
            res.push(combination);
            return;
        }
        let num = Number(digits[i]);
        let str = obj[num];
        for (let j = 0; j < str.length; j++) {
            dfs(i + 1, combination + str[j]);
        }
    }

    dfs(0, '');
    return res;
};
// @lc code=end

