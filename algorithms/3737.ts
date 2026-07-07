// 3737. Count Subarrays With Majority Element I

// function countMajoritySubarrays(nums: number[], target: number): number {
//   let result = 0;
//   let streak = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       streak++;
//       result += streak;
//     } else {
//       if (streak > 0) {
//         result += streak - 1;
//       }
//     }
//   }
//   return result;
// }

function countMajoritySubarrays(nums: number[], target: number): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let prevCnt = 0;
    for (let j = i + 1; j < nums.length + 1; j++) {
      if (prevCnt + 1 < (j - i) / 2) {
        prevCnt++;
        continue;
      }
      let cnt = 0;
      for (let k = i; k < j; k++) {
        if (nums[k] === target) {
          cnt++;
        }
      }
      if (cnt > (j - i) / 2) {
        result++;
      }
      prevCnt = cnt;
    }
  }
  return result;
}

console.log(countMajoritySubarrays([4, 1, 1, 4, 2, 1], 1));

// [1] => 1
// [1, 3] => 1
// [1, 3, 1] => 3
// [1, 1] => 3
// [1, 1, 3] => 4
// [1, 1, 3, 1] => 6
// [1, 1, 1] => 6
// [1, 1, 1, 3] => 8
// [1, 1, 1, 3, 1] => 11
// [1, 1, 1, 1] => 10
// [1, 1, 1, 1, 3] => 13
// [1, 1, 1, 1, 3, 1] => 17
// [1, 1, 1, 1, 1] => 15
// [1, 1, 1, 1, 1, 3] => 19

// [2] => 1
// [2, 2] => 3
// [2, 2, 1] => 4
// [1] => 0
// [1, 2] => 1
// [1, 2, 2] => 4

// [2] 2 => 1
// [2, 2] => 3
// [1] => 0
// [1, 2, 2, 3] => 5
// [1, 2, 2, 2] => 8
// [1, 2, 2, 2, 2] => 13
