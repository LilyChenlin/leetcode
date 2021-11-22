/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let res = [];
    let targetArr = ["qwertyuiop", "asdfghjkl",  "zxcvbnm"];
    for (let i = 0; i < words.length; i++) {
        let temp = words[i].toLocaleLowerCase();
        let firstVal = temp[0];
        let targetItem = targetArr.filter(item => {return item.indexOf(firstVal) !== -1});
        if (chargeWordsTrue(targetItem[0], temp)) {
            res.push(words[i])
        }
    }
    return res;
};

var chargeWordsTrue = (targetItem, temp) => {
    for (let i = 0; i < temp.length; i++) {
        if (targetItem.indexOf(temp[i]) == -1) {
            return false;
        }
    }
    return true
}
// @lc code=end

