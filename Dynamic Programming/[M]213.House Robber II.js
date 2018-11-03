var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  return Math.max(helper(nums, 0, nums.length - 1), helper(nums, 1, nums.length))
};

function helper(nums, left, right) {
  if (right - left <= 1) return nums[left];
  let dp = Array.from({length: right}, _ => 0);
  dp[left] = nums[left];
  dp[left + 1] = Math.max(nums[left], nums[left + 1]);
  for (let i = left + 2; i < right; i++) {
      dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp.pop();
}

/**
 * 198延伸，房子成环了，那么关键就拆成两个不成环的子问题再按198题求解
 */