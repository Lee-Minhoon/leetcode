// 80. Remove Duplicates from Sorted Array II

function removeDuplicates(nums: number[]): number {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!hash[value]) hash[value] = 1;
    else if (hash[value] === 1) hash[value] = 2;
    else {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}
