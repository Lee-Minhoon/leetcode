const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 } as const;

function romanToInt(s: string): number {
  const length = s.length;
  const keyIndex = Object.keys(ROMAN);
  let total = 0;

  for (let i = 0; i < length; i++) {
    if (i !== length - 1) {
      const currentKey = keyIndex.findIndex((item) => item === s[i]);
      const nextKey = keyIndex.findIndex((item) => item === s[i + 1]);
      if (currentKey < nextKey) {
        total = total + (ROMAN[s[i + 1]] - ROMAN[s[i]]);
        i++;
      } else {
        total += ROMAN[s[i]];
      }
    } else {
      total += ROMAN[s[i]];
    }
  }

  return total;
}
