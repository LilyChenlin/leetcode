/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
// 2. 双指针计算最大半径
// 下面的代码最难懂的地方是 Math.abs(heaters[i] - house) >= Math.abs(heaters[i + 1] - house)
// 我们举一个例子来说明这行代码的意思：
// houses：1，2，3，4
// heaters：1，4
// 对于 house 1，heater 1 比 heater 4 更接近 house1，所以不将 i 移动到 i + 1
// 对于 house 2，heater 1 比 heater 4 更接近 house2，所以不将 i 移动到 i + 1
// 对于 house 3，heater 4 比 heater 1 更接近 house3 移动i 
var findRadius = function(houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let housesIndex = 0, heatersIndex = 0;
    let res = 0;
    while (housesIndex < houses.length) {
        while (heatersIndex < heaters.length && Math.abs(heaters[heatersIndex] - houses[housesIndex]) >= Math.abs(heaters[heatersIndex + 1] - houses[housesIndex]) ) {
            heatersIndex++;
        }
        res = Math.max(res, Math.abs(heaters[heatersIndex] - houses[housesIndex]));
        housesIndex++
    }   
    
    return res;

};
// @lc code=end

