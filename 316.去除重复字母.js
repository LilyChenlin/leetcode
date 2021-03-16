/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let res = '';
    let dupRes = new Array(); // 存放去重的结果
    const inStack = new Array(26).fill(false);

    // 维护一个map记录s字符串中每个字符的数量
    let sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 1);
    }
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        sMap.set(item, sMap.has(item) ? sMap.get(item) - 1 : -1);
        // 如果字符存在inStack中
        if (inStack[item]) continue;
        while(dupRes.length > 0 && dupRes[dupRes.length - 1] > item) {
            if (sMap.get(dupRes[dupRes.length - 1]) === 0) {
                break;
            }
            inStack[dupRes[dupRes.length - 1]] = false;
            dupRes.pop();
        }
        dupRes.push(item)
        inStack[item] = true;
    }
    res = dupRes.join('');
    return res;
};
// @lc code=end

