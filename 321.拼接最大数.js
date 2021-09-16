/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */

// nums1 = [3, 4, 6, 5] 4
// nums2 = [9, 1, 2, 5, 8, 3] 6
// k = 5
var maxNumber = function(nums1, nums2, k) {
    // 获取每个数组的k位数单调栈
    let len1 = nums1.length, len2 = nums2.length;
    const maxSubsequence = new Array(k).fill(0);

    let start = Math.max(0, k - len2), end = Math.min(k, len1);
    for (let i = start; i <= end; i++) {
        const subsequence1 = getMonStack(nums1,i);
        const subsequence2 = getMonStack(nums2,k - i);
        const curMaxSubsequence = merge(subsequence1, subsequence2);
        if (compare(curMaxSubsequence, 0, maxSubsequence, 0) > 0) {
            maxSubsequence.splice(0, k, ...curMaxSubsequence);
        }
    }
    return maxSubsequence;

};

var merge = (subsequence1, subsequence2) => {
    const x = subsequence1.length, y = subsequence2.length;
    if (x === 0 ) {
        return subsequence2;
    } else if (y === 0) {
        return subsequence1;
    }
    const mergeLength = x + y;
    const merge = new Array(mergeLength).fill(0);
    let index1 = 0, index2 = 0;
    for (let i = 0; i < mergeLength; i++) {
        if(compare(subsequence1, index1, subsequence2, index2) > 0) {
            merge[i] = subsequence1[index1++];
        } else {
            merge[i] = subsequence2[index2++];
        }
    }
    return merge;
}

var getMonStack = (nums, k) => {
    let stack = [], drop_num = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
        while(stack.length > 0 && stack[stack.length  - 1] < nums[i] && drop_num > 0) {
            stack.pop();
            drop_num--;
        }
        if (stack.length < k) {
            stack.push(nums[i])
        } else {
            drop_num--;
        }
    }
    return stack;
}

var compare = (subsequence1, index1, subsequence2, index2) => {
    const x = subsequence1.length, y = subsequence2.length;
    while (index1 < x && index2 < y) {
        const difference = subsequence1[index1] - subsequence2[index2];
        if (difference !== 0) {
            return difference;
        }
        index1++;
        index2++;
    }
    return (x - index1) - (y - index2);
}
// @lc code=end

