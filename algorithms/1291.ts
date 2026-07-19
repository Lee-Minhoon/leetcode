// 1291. Sequential Digits

function sequentialDigits(low: number, high: number): number[] {
  const nums: number[][] = [[1, 2, 3, 4, 5, 6, 7, 8, 9]];
  let x = 1;
  for (let i = 0; i < 8; i++) {
    nums.push([]);
    for (let j = 0; j < 9; j++) {
      if (j < 9 - x) {
        const prev = nums[i][j];
        nums[i + 1].push(prev * 10 + x + j + 1);
      }
    }
    x++;
  }
  const flatten = nums.flat();
  let start = -1;
  let end = Infinity;
  for (let i = 0; i < flatten.length; i++) {
    const current = flatten[i];
    if (start === -1 && low <= current) {
      start = i;
    }
    if (end === Infinity && high <= current) {
      if (high === current) {
        end = i + 1;
      } else {
        end = i;
      }
    }
  }
  return start === -1 ? [] : flatten.slice(start, end);
}

console.log(sequentialDigits(178546104, 812704742));

// 12 123
// 23 234
// 34 345
// 45 456
// 56 567
// 67 678
// 78 789
// 89
