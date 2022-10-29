function findMaxConsecutiveOnes(nums: number[]): number {
  let cache = 0;
  let result = 0;

  nums.forEach((item) => {
    if (item === 1) {
      result++;
      if (cache < result) {
        cache = result;
      }
    } else {
      result = 0;
    }
  });

  return cache;
}
