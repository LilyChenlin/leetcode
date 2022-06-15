/*
 * @lc app=leetcode.cn id=719 lang=typescript
 *
 * [719] 找出第 k 小的距离对
 */

// @lc code=start
function smallestDistancePair(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let n = nums.length, left = 0, right = nums[n - 1] - nums[0];

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        let ans = 0;

        for (let i = 0; i < n; i++) {
            const j = search(nums, i, nums[i] - mid);
            ans += i - j;
        }

        if (ans >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

const search = (nums: number[], end: number, target: number) => {
    let left = 0, right = end;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);;
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
// @lc code=end

