// 3756. Concatenate Non-Zero Digits and Multiply by Sum II

const MOD = 1000000007n;

function sumAndMultiply(s: string, queries: number[][]): number[] {
  const answer: BigInt[] = [];

  const nonZeroCounts = [0];
  const sumOfDigits = [0n];
  const values = [0n];
  const pow = [1n];

  for (let i = 0; i < s.length; i++) {
    const n = BigInt(+s[i]);
    if (n === 0n) {
      sumOfDigits[i + 1] = sumOfDigits[i];
      nonZeroCounts[i + 1] = nonZeroCounts[i];
      values[i + 1] = values[i];
    } else {
      sumOfDigits[i + 1] = sumOfDigits[i] + n;
      nonZeroCounts[i + 1] = nonZeroCounts[i] + 1;
      values[i + 1] = (values[i] * BigInt(10) + n) % MOD;
    }
  }

  for (let i = 1; i < s.length + 1; i++) {
    pow[i] = (pow[i - 1] * BigInt(10)) % MOD;
  }

  for (let i = 0; i < queries.length; i++) {
    const start = queries[i][0];
    const end = queries[i][1];
    const sumOfDigit = sumOfDigits[end + 1] - sumOfDigits[start];
    const nonZeroCount = nonZeroCounts[end + 1] - nonZeroCounts[start];
    const ev = values[end + 1];
    const sv = values[start];
    const x = (ev - ((sv * pow[nonZeroCount]) % MOD) + MOD) % MOD;
    answer.push((x * sumOfDigit) % MOD);
  }
  return answer.map((v) => Number(v));
}
// 435232355

console.log(sumAndMultiply("9223538386222334255", [[8, 18]]));

// 0 1
// 1 0
// 2 2
// 3 0

// 4 3
// 5 0
// 6 0
// 7 4

// 4, 7 => 34 * 7 = 238

// 12000

// 1     1    1
// 1     1    1
// 36    12   3   // 4    2   2
// 738   123  6   // 115  23  5  // 9   3  3 //
// 12340 1234 10  // 2106 234 9  // 238 34 7 // 16 4

1000; // Length 4 1 -> 1000

// 188786073
