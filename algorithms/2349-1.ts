// 2349. Design a Number Container System

class CustomTreeNode {
  value: number;
  _left: CustomTreeNode | null = null;
  _right: CustomTreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }

  set left(node: CustomTreeNode | null) {
    this._left = node;
  }

  set right(node: CustomTreeNode | null) {
    this._right = node;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }
}

function getSortedArray(node: CustomTreeNode | null, result: number[] = []) {
  if (node !== null) {
    getSortedArray(node.left, result);
    result.push(node.value);
    getSortedArray(node.right, result);
  }
  return result;
}

class BST {
  private root: CustomTreeNode;

  constructor(value: number) {
    this.root = new CustomTreeNode(value);
  }

  insert(value: number) {
    const node = new CustomTreeNode(value);
    let current = this.root;
    while (current) {
      if (node.value < current.value) {
        if (current.left === null) {
          current.left = node;
          return;
        } else {
          current = current.left;
        }
      } else if (node.value > current.value) {
        if (current.right === null) {
          current.right = node;
          return;
        } else {
          current = current.right;
        }
      } else {
        return;
      }
    }
  }

  get arr() {
    return getSortedArray(this.root);
  }
}

class NumberContainers {
  private valueMap = new Map<number, BST>();
  private indexMap = new Map<number, number>();

  constructor() {}

  change(index: number, number: number): void {
    const bst = this.valueMap.get(number) ?? new BST(index);
    bst.insert(index);
    this.valueMap.set(number, bst);
    this.indexMap.set(index, number);
  }

  find(number: number): number {
    const heap = this.valueMap.get(number);
    if (heap) {
      for (const index of heap.arr) {
        if (this.indexMap.get(index) === number) {
          return index;
        }
      }
      return -1;
    } else {
      return -1;
    }
  }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

const numberContainers = new NumberContainers();

const a = [
  "NumberContainers",
  "change",
  "find",
  "find",
  "find",
  "change",
  "change",
  "change",
  "change",
  "change",
  "change",
  "change",
  "change",
  "change",
  "find",
  "change",
  "find",
  "find",
  "change",
  "find",
  "change",
];

const b = [
  [],
  [75, 40],
  [14],
  [41],
  [40],
  [27, 40],
  [22, 14],
  [85, 14],
  [22, 40],
  [18, 34],
  [92, 41],
  [22, 40],
  [75, 40],
  [59, 34],
  [40],
  [27, 14],
  [34],
  [14],
  [13, 34],
  [40],
  [18, 41],
];

for (let i = 0; i < a.length; i++) {
  if (a[i] === "NumberContainers") {
    continue;
  } else if (a[i] === "change") {
    numberContainers.change(b[i][0], b[i][1]);
  } else {
    console.log(numberContainers.find(b[i][0]));
  }
}
