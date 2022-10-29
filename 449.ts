function findDisappearedNumbers(nums: number[]): number[] {
  const result = [];
  const hash = new Array(nums.length).fill(0);

  nums.forEach((item) => {
    hash[item - 1]++;
  });

  hash.forEach((item, index) => {
    if (item === 0) {
      result.push(index + 1);
    }
  });

  return result;
}
