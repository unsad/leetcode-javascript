/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let len = s.length;
    let dp1 = Array.from({length: len + 1}, (item, index) => len - index - 1);
    let dp2 = Array.from({length: len}, _ => Array.from({length: len}, _ => false));
    
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (s[i] === s[j] && (j - i <= 1 || dp2[i + 1][j - 1])) {
                dp2[i][j] = true;
                dp1[i] = Math.min(dp1[i], dp1[j + 1] + 1);
            }
        }
    }
    return dp1[0];
};

/**
 * 和131类似，区别在于不用求出所有情况，只用求出最少的分割法。那么考虑用动态规划，新建两个动规
 * 数组，dp1[i]表示以i为起点的子字符串的切割为回文的最小切割次数。dp2[i][j]表示i到j的子字符串
 * 是否为回文。从后往前双层遍历，根据各自的状态转移方程求解。
 */