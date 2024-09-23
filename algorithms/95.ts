class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function generate(start: number, end: number): Array<TreeNode | null> {
  if (start === end) {
    return [null];
  }

  const trees: Array<TreeNode> = [];

  for (let i = start; i < end; i++) {
    const parent = i;

    const leftChildren = generate(start, i);
    const rightChildren = generate(i + 1, end);

    for (const left of leftChildren) {
      for (const right of rightChildren) {
        trees.push(new TreeNode(parent, left, right));
      }
    }
  }

  return trees;
}

function generateTrees(n: number): Array<TreeNode | null> {
  return generate(1, n + 1);
}
