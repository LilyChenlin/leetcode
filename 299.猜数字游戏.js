/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // 思路，首先遍历一下公牛的个数
    let BullsArr = [];
    let secretTemp = secret.split("").slice(); // 记录除了公牛之外的所有元素
    let guessTemp = guess.split("").slice();
    let i = 0, j = 0;
    while (i < secret.length && j < guess.length) {
        if (j == i && secret[i] == guess[j]) {
            // 公牛
            secretTemp[i] = " "; // 将公牛所在的位置置为空
            guessTemp[i] = null;
            BullsArr.push(secret[i])
            // BullsArr.indexOf(secret[i]) ? BullsArr.push(secret[i]) : null;
        }
        i++;
        j++;
    }

    // 奶牛
    let cowsArr = [];
    let cowsMap = [];// 找到相同的数字 存数字及相应的index
    let a = 0, b = 0;
    for (let i = 0; i < secretTemp.length; i++) {
        const val = secretTemp[i]
        const idx = guessTemp.indexOf(val);
        if (idx !== -1) {
            const index = guess.indexOf(val)
            // 如果guess中存在对的数字 {val: index}
            cowsMap.push({val, index});
            guessTemp.splice(idx, 1)
        }
    }

    while (b < cowsMap.length) {
        const temp = cowsMap[b];
        const idx = secretTemp.indexOf(temp.val);
        if (idx !== temp.index) {
            // const cowIdx = cowsArr.indexOf(temp.val);
            // if (cowIdx == -1) 
            cowsArr.push(temp.val)
        }
        b++;
    }

    return BullsArr.length + "A" + cowsArr.length + "B"

}
// @lc code=end

