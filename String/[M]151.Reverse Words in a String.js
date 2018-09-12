/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
	let tmp = '';
	let res = '';
    let p = str.length - 1;
    while (p >= 0) {
    	if (str[p] !== ' ') {
    		tmp = str[p] + tmp;
    	} else {
    		if (tmp.length) {
    			res += `${tmp} `;
    			tmp = '';
    		}
    	}
    	p--;
    }
    res += tmp;
    return res.trim();
};

/**
 * 翻转单词，思路和翻转字符串也相同，从后遍历记录并用个变量记录当前单词即可
 */