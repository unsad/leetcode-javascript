function numDecodings(s) {
  if (s.length === 0) return 0;

  const N = s.length;
  const dp = Array(N+1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;

  for (let i = 2; i <= N; i++) {
    if (s[i-1] !== '0') {
      dp[i] += dp[i-1];
    }
    if (s[i-2] === '1' || s[i-2] === '2' && s[i-1] <= '6') {
      dp[i] += dp[i-2];
    }
  }

  return dp[N];
}

/**
 * 这题求状态转移方程关键分两种情况，如果dp[i]对应数字不为0，那么可以对这个数字解码，加上dp[i-1]
 * 的所有情况，如果对应数字和前一个数字能组成1到26，那么可以和前一个数字组成解码，加上dp[i-2]
 */