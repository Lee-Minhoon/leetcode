/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroCount = 0;
  for (let i = 0; nums[i] !== undefined; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount++;
      i--;
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    nums.push(0);
  }
}
