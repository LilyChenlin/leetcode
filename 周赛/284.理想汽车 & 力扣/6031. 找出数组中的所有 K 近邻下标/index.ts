function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    let res = [];
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] === key) {
            slow = Math.max(slow, fast - k);
            let end = Math.min(nums.length - 1, fast + k);
            while (slow <= end) {
                res.push(slow++)
            }
        }


    }
    return res;
};