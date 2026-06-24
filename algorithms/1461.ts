// 1461. Check If a String Contains All Binary Codes of Size K

function pow(n: number, m: number) {
  let result = 1;
  for (let i = 0; i < m; i++) {
    result *= n;
  }
  return result;
}

function hasAllCodes(s: string, k: number): boolean {
  const binaryCodeSet = new Set<string>();

  for (let i = 0; i < s.length - k + 1; i++) {
    binaryCodeSet.add(s.substring(i, i + k));
  }

  const count = pow(2, k);

  if (binaryCodeSet.size < count) {
    return false;
  }

  return true;
}
