/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
	if (!timeSeries.length) return 0;
    let res = duration;
    for (let i = 1; i < timeSeries.length; i++) {
    	res += Math.min(timeSeries[i] - timeSeries[i - 1], duration)
    }
    return res;
};

/**
 * 计算提莫的攻击带毒回合。最后一次攻击持续duration回合，设置为初始值。遍历时从第2次开始和上一次
 * 攻击比较，持续时间为duration和两次攻击间隔更小的部分
 */