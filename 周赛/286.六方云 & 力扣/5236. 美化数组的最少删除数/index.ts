function minDeletion(nums: number[]): number {
    let stack = [], len = nums.length;
    for (let i = 0; i < len; i++) {
        const size = stack.length;
        if (size % 2 !== 0) {
            if (stack[stack.length - 1] === nums[i]) continue;
        }
        stack.push(nums[i]);
    }

    let stackLen = stack.length % 2 === 0 ? stack.length : stack.length - 1;
    return len - stackLen;
};