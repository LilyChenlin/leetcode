function minimumOperations(nums: number[]): number {
    let max1 = 0, mmax1 = 0, max2 = 0, mmax2 = 0, count1 = 0, count2 = 0, max1Num = 0, max2Num = 0;
    // 根据奇偶索引进行分组
    let map1 = new Map(); // 偶数
    let map2 = new Map(); // 奇数

    for (let i = 0; i < nums.length; i++) {
        // 偶数
        if (i % 2 == 0) {
            map1.set(nums[i], map1.get(nums[i]) + 1 || 1)
        } else {
            map2.set(nums[i], map2.get(nums[i]) + 1 || 1)
        }
    }

    for (let key of map1.keys()) {
        let item = map1.get(key);
        count1 += item;
        if (max1 < item) {
            mmax1 = max1;
            max1 = item;
            max1Num = key
        } else if (mmax1 < item) {
            mmax1 = item;
        }
    }


    for (let key of map2.keys()) {
        let item = map2.get(key);
        count2 += item;
        if (max2 < item) {
            mmax2 = max2;
            max2 = item;
            max2Num = key
        } else if (mmax2 < item) {
            mmax2 = item;
        }
    }


    if (max1Num !== max2Num) {
        return nums.length - max1 - max2;
    } else {
        return Math.min(count1 - max1 + count2 - mmax2, count1 - mmax1 + count2 - max2)
    }

};