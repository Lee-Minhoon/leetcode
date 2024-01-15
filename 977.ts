// 977. Squares of a Sorted Array

function sortedSquares(nums: number[]): number[] {
  const result = [];
  nums.forEach((item) => {
    result.push(Math.pow(item, 2));
  });
  result.sort((a, b) => a - b);
  return result;
}
