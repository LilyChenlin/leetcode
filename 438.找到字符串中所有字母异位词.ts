/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    let map = new Map();
    for (let i = 0; i < p.length; i++) {
        map.set(p[i], map.get(p[i]) + 1 || 1);
    }

    let res = [],
        count = 0, // 有效结果
        left = 0,
        right = 0,
        window = new Map(),
        needLen = map.size;

    while (right < s.length) {
        let temp = s[right];
        if (map.has(temp)) {
            window.set(temp, window.get(temp) + 1 || 1);
            if (map.get(temp) === window.get(temp)) count++;
        }

        right++;

        if (right - left >= p.length) {
            if (count === needLen) {
                res.push(left);
            }

            let d = s[left];
            left++;
            if (map.has(d)) {
                if (map.get(d) === window.get(d)) {
                    count--;
                }

                window.set(d, window.get(d) - 1 || -1);
            }
        }
    }
    return res;
};
// @lc code=end

