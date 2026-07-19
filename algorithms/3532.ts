// 3532. Path Existence Queries in a Graph I

function pathExistenceQueries(
  n: number,
  nums: number[],
  maxDiff: number,
  queries: number[][],
): boolean[] {
  const result: boolean[] = [];
  const distance: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    const s = nums[i];
    const e = nums[i + 1];
    distance.push(Math.abs(s - e));
  }
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const min = query[0] > query[1] ? query[1] : query[0];
    const max = min === query[0] ? query[1] : query[0];
    result.push(
      !distance.slice(min, max).find((v) => {
        return v > maxDiff;
      }),
    );
  }
  return result;
}

console.log(
  pathExistenceQueries(4, [2, 5, 6, 8], 2, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ]),
);
