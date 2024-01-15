function sortArrayByParity(nums: number[]): number[] {
  const odd: number[] = [];
  const even: number[] = [];

  nums.forEach((item) => {
    if (item % 2 !== 0) {
      odd.push(item);
    } else {
      even.push(item);
    }
  });

  return even.concat(odd);
}
