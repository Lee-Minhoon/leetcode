// 119. Pascal's Triangle II

function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1];
  const current = [];
  const top = getRow(rowIndex - 1);
  current.push(1);
  for (let i = 0; i < top.length - 1; i++) {
    current.push(top[i] + top[i + 1]);
  }
  current.push(1);
  return current;
}
