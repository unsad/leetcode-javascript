/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
	let p = s.length - 1;
	let res = '';
	while(p >= 0) {
		res += s[p--]; 
	}
	return res;
};

/**
 * 常规翻转字符串
 */