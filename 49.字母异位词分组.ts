/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const strArr = str.split('');
        // 升序
        let copyStr = strArr.sort();
        copyStr = copyStr.join();
        if (map.has(copyStr)) {
            let arr = map.get(copyStr);
            map.set(copyStr, [...arr, str])
        } else {
            map.set(copyStr, [str])
        }
    }
    let res = [];
    for (let value of map.values()) {
        res.push(value);
    }
    return res;
};
// @lc code=end

