/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
	T = T.split('');
    T.sort((a, b) => {
    	return S.indexOf(a) - S.indexOf(b);
    });
    return T.join('');
};

/**
 * 内置sort根据S确定排序规则
 */