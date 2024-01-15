// 459. Repeated Substring Pattern

function getDivisors(num: number): number[] {
  const result = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      result.push(i);
      if (i !== 1) {
        result.push(num / i);
      }
    }
  }
  return result;
}

function isRepeat(subString: string, s: string): boolean {
  const regex = new RegExp(subString, "g");
  const count = (s.match(regex) || []).length;
  return count === s.length / subString.length;
}

function repeatedSubstringPattern(s: string): boolean {
  if (s.length === 1) return false;
  let result = false;
  const divisors = getDivisors(s.length);
  divisors.forEach((item) => {
    if (isRepeat(s.slice(0, item), s)) {
      result = true;
      return false;
    }
  });
  return result;
}
