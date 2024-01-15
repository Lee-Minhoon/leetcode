// 1295. Find Numbers with Even Number of Digits

function findNumbers(nums: number[]): number {
  let evenDigits = 0;
  let digits = [0, 0, 0, 0, 0, 0];
  nums.forEach((item) => {
    for (let i = 0; i < 6; i++) {
      const divider = Math.max(1, Math.pow(10, i));
      if (item / divider >= 1 && item / divider < 10) {
        digits[i]++;
      }
    }
  });

  digits.forEach((item, index) => {
    if (item > 0 && index % 2 === 1) {
      evenDigits += item;
    }
  });

  return evenDigits;
}
