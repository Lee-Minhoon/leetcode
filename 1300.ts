function replaceElements(arr: number[]): number[] {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(Math.max(...arr.slice(i)));
  }

  result.push(-1);

  return result;
}
