function removeDuplicates(nums: number[]): number {
  for (let i = 0; nums[i] !== undefined && nums[i + 1] !== undefined; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}
