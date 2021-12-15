/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    // residue 剩余需检测的IP段
    let res = [], len = s.length, solution = [];
    if (len > 12 || len < 4) return res;

    let backTrack = (begin, residue) => {
        if (begin === len) {
            if (residue === 0) {
                res.push([...solution].join('.'));
            }
            return;
        } else {
            for (let i = begin; i < begin + 3; i++) {
                if (i >= len) break;
                // 剪枝
                if (residue * 3 < len - i) { continue };
                if (judgeIpSegment(s, begin, i)) {
                    let subIpSegment = s.substring(begin, i + 1);
                    solution.push(subIpSegment);

                    backTrack(i + 1, residue - 1);

                    solution.pop();
                }
            }
        }
    }
    backTrack(0, 4);
    return res;
};


let judgeIpSegment = (s, left, right) => {
    let len = right - left + 1;
    if (len > 1 && s[left] === '0') {
        return false
    }
    let res = 0;
    while (left <= right) {
        res = res * 10 + Number(s[left]);
        left++;
    }
    return res >= 0 && res <= 255;
}
// @lc code=end

