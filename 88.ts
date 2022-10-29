/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const length = nums1.length;

  for (let i = m; i < length; i++) {
    nums1.pop();
  }

  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  nums1.sort((a, b) => a - b);
}
