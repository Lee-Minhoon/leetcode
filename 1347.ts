function checkIfExist(arr: number[]): boolean {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === 2 * arr[j]) {
        result = true;
      }
    }
  }
  return result;
}
