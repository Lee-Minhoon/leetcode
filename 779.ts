function kthGrammar(n: number, k: number): number {
  const getNum = (n: number, k: number): number => {
    if (n === 1) return 0;
    if (n === 2) return k - 1;

    if (k % 2 === 0) return getNum(n - 1, Math.ceil(k / 2)) === 1 ? 0 : 1;
    return getNum(n - 1, Math.ceil(k / 2));
  };

  return getNum(n, k);
}

// const cache = Array.from({length:31}, () => Array.from({length:2}, () => ""));
// cache[1][0] = "0";
// cache[1][1] = "0";
// cache[2][0] = "01";
// cache[2][1] = "10";

// function kthGrammar(n: number, k: number): number {

//     const getString = (n: number, r: boolean): string => {
//         const check = cache[n][r ? 1 : 0] === "" ? "" : cache[n][r ? 1 : 0];
//         const reverseCheck = cache[n][r ? 0 : 1] === "" ? "" : cache[n][r ? 0 : 1];

//         const string = check !== "" ? check : cache[n][r ? 1 : 0] = getString(n - 1, r);
//         const reverse = reverseCheck !== "" ? reverseCheck : cache[n][r ? 0 : 1] = getString(n - 1, !r);

//         return string + reverse;
//     }

//     return +getString(n, false)[k - 1];
// };
