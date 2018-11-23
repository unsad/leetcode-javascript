var containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
          return true;
      } else {
          map.set(nums[i], i);
      }
  }
  return false;
};

/**
 * 求给定距离内是否有重复值，遍历时用map记录值和对应index，遇到重复值时判断index距离并更新index
 */