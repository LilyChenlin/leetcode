/*
 * @lc app=leetcode.cn id=535 lang=javascript
 *
 * [535] TinyURL 的加密与解密
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
    this.map = new Map();
    this.id = 0;
    this.id++;
    this.map.set(this.id, longUrl);
    return 'http://tinyurl.com/' + this.id;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    const arr = shortUrl.split('/');
    const id = Number(arr[arr.length - 1]);
    return this.map.get(id);
};
// @lc code=end

