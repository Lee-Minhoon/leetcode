// 414. Third Maximum Number

function thirdMax(nums: number[]): number {
  nums.sort((a, b) => b - a);

  let max = nums[0];
  let order = 1;
  for (let i = 1; i < nums.length; i++) {
    if (max > nums[i]) {
      max = nums[i];
      order++;
      if (order === 3) {
        break;
      }
    }
  }
  if (order !== 3) {
    return Math.max(...nums);
  }
  return max;
}
