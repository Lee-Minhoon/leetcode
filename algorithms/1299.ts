// 1299. Replace Elements with Greatest Element on Right Side

function replaceElements(arr: number[]): number[] {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(Math.max(...arr.slice(i)));
  }

  result.push(-1);

  return result;
}
