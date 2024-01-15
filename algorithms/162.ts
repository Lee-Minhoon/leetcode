// 162. Find Peak Element

function findPeakElement(nums: number[]): number {
  let result;
  nums.forEach((item, index) => {
    const prev = index > 0 ? nums[index - 1] : -Infinity;
    const next = index < nums.length - 1 ? nums[index + 1] : -Infinity;
    const isPeak = item > prev && item > next;
    if (isPeak) {
      result = index;
      return false;
    }
  });
  return result;
}
