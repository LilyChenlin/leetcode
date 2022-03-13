function maximumTop(nums: number[], k: number): number {
    if (k % 2 !== 0 && nums.length == 1) {
        return -1;
    }

    let maxValue = 0;
    for (let i = 0; i < nums.length && i + 1 < k; i++) {
        maxValue = Math.max(maxValue, nums[i])
    }

    if (k < nums.length) {
        maxValue = Math.max(maxValue, nums[k])
    }
    return maxValue;
};