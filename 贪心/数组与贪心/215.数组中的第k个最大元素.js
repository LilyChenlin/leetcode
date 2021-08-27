/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heapSize = nums.length;
    // 构造大根堆
    buildMaxHeap(nums, heapSize);
    
    // 进行下沉，取出第k大元素
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i);
        --heapSize // 下沉后的元素不参与到大顶堆的调整
        // 重新调整大顶堆
        maxHeapify(nums, 0, heapSize);
    }
    return nums[0]
}
var buildMaxHeap = (nums, heapSize) => {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, i, heapSize)
    } 
}
var maxHeapify = (nums, i, heapSize) => {
    let left = i * 2 + 1, right = i * 2 + 2;
    let largest = i;
    if (left < heapSize && nums[left] > nums[largest]) {
        largest = left;
    }
    if (right < heapSize && nums[right] > nums[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(nums, i, largest);
        // 继续调整下面的非叶子节点
        maxHeapify(nums, largest, heapSize)
    }
}

// 将最大值与当前的值进行交换
var swap = (nums, i, largest) => {
    let temp = nums[i];
    nums[i] = nums[largest];
    nums[largest] = temp;
}
// @lc code=end

