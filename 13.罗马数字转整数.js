/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
        for(let i = 0; i < s.length; i++) {
            switch (s[i]) {
                case 'I': 
                    if (s[i + 1] == "V" || s[i + 1] == "X") {
                        result += s[i + 1] == "V" ? 4 : 9;
                        i++;
                        break;
                    } else {
                        result += 1; break;
                    }
                case 'V': result += 5; break;
                case 'X': 
                    if (s[i + 1] == "C" || s[i + 1] == "L") {
                        result += s[i + 1] == "C" ? 90 : 40;
                        i++;
                        break;
                    } else {
                        result += 10; break;
                    }
                    
                case 'L': result += 50; break;
                case 'C': 
                    if (s[i + 1] == "M" || s[i + 1] == "D") {
                        result += s[i + 1] == "M" ? 900 : 400;
                        i++;;
                        break
                    } else {
                        result += 100; break;
                    }
                case 'D': result += 500; break;
                case 'M': result += 1000; break;
            }
        }
    // }

    return result
};
// @lc code=end

