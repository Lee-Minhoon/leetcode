// 50. Pow(x, n)

function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  const getPow = (x: number, n: number) => {
    if (x === 1 || n === 0) {
      return 1;
    }
    if (n === 1) {
      return x;
    }
    if (n % 2 === 0) {
      const pow = getPow(x, n / 2);
      return pow * pow;
    } else {
      const pow = getPow(x, (n - 1) / 2);
      return x * pow * pow;
    }
  };

  return getPow(x, n);
}
