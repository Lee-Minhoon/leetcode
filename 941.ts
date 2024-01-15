// 941. Valid Mountain Array

function validMountainArray(arr: number[]): boolean {
  let result = true;
  let climbing = true;

  if (arr.length === 1) return false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (i !== 0 && arr[i] >= arr[i + 1]) {
      climbing = false;
    }
    if (climbing && arr[i] >= arr[i + 1]) {
      result = false;
    }
    if (!climbing && arr[i] <= arr[i + 1]) {
      result = false;
    }
  }

  return result && !climbing;
}
