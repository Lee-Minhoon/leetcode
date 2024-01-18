// 169. Majority Element

function majorityElement(nums: number[]): number {
  const hash: { [key: number]: number } = {};
  let majority = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!hash[value]) hash[value] = 1;
    else {
      hash[value]++;
      if (hash[value] > hash[majority]) {
        majority = value;
      }
    }
  }

  return majority;
}
