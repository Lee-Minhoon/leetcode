function heightChecker(heights: number[]): number {
  let notMatched = 0;
  const sorted = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      notMatched++;
    }
  }
  return notMatched;
}
