// 189. Rotate Array

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let start = 0;
  let store: number = nums[0];
  let copy: number;
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    copy = store;
    idx = (idx + k) % nums.length;
    store = nums[idx];
    nums[idx] = copy;
    if (idx === start) {
      start++;
      idx = start;
      store = nums[idx];
    }
  }
}
