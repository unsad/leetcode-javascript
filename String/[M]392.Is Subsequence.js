/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	if (!s.length) return true;
    let idx = t.indexOf(s[0]);
    if (idx !== -1) {
    	return isSubsequence(s.slice(1), t.slice(idx + 1));
    } else {
    	return false;
    }
};

/**
 * 求子串是否存在，递归即可
 */