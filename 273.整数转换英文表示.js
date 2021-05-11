/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// 
// 123456
var numberToWords = function (num) {
    if(num === 0) return "Zero";
  // 1到19
  const unitObj = {
    1: " One",
    2: " Two",
    3: " Three",
    4: " Four",
    5: " Five",
    6: " Six",
    7: " Seven",
    8: " Eight",
    9: " Nine",
    10: " Ten",
    11: " Eleven",
    12: " Twelve",
    13: " Thirteen",
    14: " Fourteen",
    15: " Fifteen",
    16: " Sixteen",
    17: " Seventeen",
    18: " Eighteen",
    19: " Nineteen"
  }
  // 20, 30 ~ 90
  const tenObj = {
    2: " Twenty",
    3: " Thirty",
    4: " Forty",
    5: " Fifty",
    6: " Sixty",
    7: " Seventy",
    8: " Eighty",
    9: " Ninety"
  }
  // 数字大小限制为Billion级别，所以只需要以下几个就行了
  const unitAry = ["", " Thousand", " Million", " Billion"];
  // 这个数决定选取当前的数字块后面加的单位
  let count = 0;
  let str = "";
  // 将数字按照3位分割 分割后的数字 除了后面附带的单位不一样，其他的都相同处理方法
  while (num > 0) {
    const newNum = num % 1000;
    const newNumStr = convertNumToStr(newNum);
    str = (newNumStr === "" ? "" : (newNumStr + unitAry[count])) + (str === "" ? "" : (" " + str));
    num = parseInt(num / 1000);
    count++;
  }

  function convertNumToStr(num) {
    let str = "";
    const n1 = parseInt(num / 100);
    if (n1 > 0) {
      str += unitObj[n1] + " Hundred";
    }
    let n2 = num % 100;
    if (n2 > 19) {
      const tenCount = parseInt(n2 / 10);
      const geCount = n2 % 10;
      str += tenObj[tenCount];
      if (geCount > 0) {
        str += unitObj[geCount];
      }
    } else if(n2 > 0) {
      str += unitObj[n2];
    }
    return str.trim();
  }
  return str.replace(/\s{2,}/g, " ");
};

// @lc code=end
