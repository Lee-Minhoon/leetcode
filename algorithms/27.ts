// 27. Remove Element

function removeElement(nums: number[], val: number): number {
  for (let i = 0; nums[i] !== undefined; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}
