/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    let len = num.length;

    /**
     * index 当前下标
     * sum 前两个数的和
     * previous 前一个数的值
     * count 生成数个数
    */
    let toFlashBack = (index, sum, previous, count) => {
        // 遍历结束后，如果已生成三个数以上
        if (index == len) {
            return count > 2;
        }

        let value = 0;
        for (let i = index; i < len; i++) {
            // 除0以外，任何数的首位不能为0
            if (i > index && num[index] == '0') {
                break;
            }
            value = value * 10 + Number(num[i]);
            if (count >= 2) {
                if (value < sum) {
                    continue
                } else if (value > sum) {
                    break
                }
            }
            if (toFlashBack(i + 1, previous + value, value, count + 1)) {
                return true;
            }
        }
        return false;
    }

    return toFlashBack(0, 0, 0, 0);
};
// @lc code=end

