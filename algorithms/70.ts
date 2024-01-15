// 70. Climbing Stairs

const hash = new Array(45);
hash[0] = 1;
hash[1] = 2;
hash[2] = 3;

function climbStairs(n: number): number {
  if (hash[n - 1]) return hash[n - 1];
  return (hash[n - 1] = climbStairs(n - 1) + climbStairs(n - 2));
}
