/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
	let map = {};
	let bulls = 0;
	let cows = 0;
	for (let i = 0; i <= 9; i++) {
		map[i] = 0;
	}
	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			bulls++;
		} else {
			if (map[secret[i]]++ < 0) cows++;
			if (map[guess[i]]-- > 0) cows++;
		}
	}
    return `${bulls}A${cows}B`;
};

/**
 * 这题关键在于遍历过程中,cows对应的guess数和secret数的保存，并和当前遍历值的比较。很容易想到用hashmap记录数量。
 * secret数加1，guess数减1。
 * 如果当前遍历的secret数小于0，说明有记录的guess数未被命中，此时被当前secret命中，cows加1。
 * 如果当前遍历的guess数大于0，说明有记录的secret数未被命中，此时被当前guess命中，cows加1。
 */

