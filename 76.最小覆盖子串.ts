/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    let need = new Map();
    for(let i = 0; i < t.length; i++) {
        need.set(t[i], need.get(t[i]) + 1|| 1);
    }
    let left = 0, right = 0, ans = +Infinity, valid = 0, window = new Map(), start = 0;
    while(right < s.length) {
        let r = s[right];
        if (need.has(r)) {
            window.set(r, window.get(r) + 1 || 1);
            if (window.get(r) === need.get(r)) {
                valid++;
            }
        }
        right++;
        while(need.size === valid) {
            if (right - left < ans) {
                start = left;
                ans = right - left;
            }
            let l = s[left];
            if (need.has(l)) {
                if (need.get(l) === window.get(l)) valid--;
                window.set(l, window.get(l) - 1 || 0);
            }
            left++;
        }
    }
    return ans === +Infinity ? '' : s.substr(start, ans);
};
// @lc code=end

