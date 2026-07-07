// 2349. Design a Number Container System

class CustomMinHeap {
  private _set: Set<number> = new Set();
  private _container: number[] = [];

  constructor() {}

  private getLeftChildIndex(parentIndex: number) {
    return parentIndex * 2 + 1;
  }

  private getRightChildIndex(parentIndex: number) {
    return parentIndex * 2 + 2;
  }

  private getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this._container.length;
  }
  private hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this._container.length;
  }

  private getSmallerChildIndex(parentIndex: number): number {
    if (!this.hasLeftChild(parentIndex)) return -1;
    if (!this.hasRightChild(parentIndex))
      return this.getLeftChildIndex(parentIndex);

    const leftIndex = this.getLeftChildIndex(parentIndex);
    const rightIndex = this.getRightChildIndex(parentIndex);

    return this._container[leftIndex] < this._container[rightIndex]
      ? leftIndex
      : rightIndex;
  }

  private swap(a: number, b: number) {
    const temp = this._container[a];
    this._container[a] = this._container[b];
    this._container[b] = temp;
  }

  public insert(value: number) {
    if (this._set.has(value)) return;
    this._set.add(value);
    this._container.push(value);

    this.heapifyUp(this._container.length - 1);
  }

  public remove(value: number) {
    const index = this._container.findIndex((v, i) => v === value);
    if (index === -1) return;

    this._set.delete(value);

    const lastValue = this._container.pop()!;

    if (index === this._container.length) return;

    this._container[index] = lastValue;

    this.heapifyDown(index);
    this.heapifyUp(index);
  }

  private heapifyUp(currentIndex: number) {
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      const parent = this._container[parentIndex];

      if (this._container[currentIndex] < parent) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(currentIndex: number) {
    while (this.getLeftChildIndex(currentIndex) < this._container.length) {
      const current = this._container[currentIndex];
      const smallerIndex = this.getSmallerChildIndex(currentIndex);

      if (current <= this._container[smallerIndex]) {
        break;
      }

      this.swap(currentIndex, smallerIndex);
      currentIndex = smallerIndex;
    }
  }

  get arr() {
    return this._container;
  }
}

class NumberContainers {
  private valueMap = new Map<number, CustomMinHeap>();
  private indexMap = new Map<number, number>();

  constructor() {}

  change(index: number, number: number): void {
    const heap = this.valueMap.get(number) ?? new CustomMinHeap();
    heap.insert(index);
    const prevValue = this.indexMap.get(index);
    if (prevValue && number !== prevValue) {
      const prevValueHeap = this.valueMap.get(prevValue) ?? new CustomMinHeap();
      prevValueHeap.remove(index);
      this.valueMap.set(prevValue, prevValueHeap);
    }
    this.valueMap.set(number, heap);
    this.indexMap.set(index, number);
  }

  find(number: number): number {
    const heap = this.valueMap.get(number);
    if (heap) {
      return heap.arr[0] ?? -1;
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

numberContainers.change(25, 50);
numberContainers.change(56, 31);
numberContainers.change(30, 50);
numberContainers.change(25, 20);
console.log("here", numberContainers.find(31));
console.log("here", numberContainers.find(50));

// const a = [
//   "NumberContainers",
//   "change",
//   "find",
//   "find",
//   "find",
//   "change",
//   "change",
//   "change",
//   "change",
//   "change",
//   "change",
//   "change",
//   "change",
//   "change",
//   "find",
//   "change",
//   "find",
//   "find",
//   "change",
//   "find",
//   "change",
// ];

// const b = [
//   [],
//   [75, 40],
//   [14],
//   [41],
//   [40],
//   [27, 40],
//   [22, 14],
//   [85, 14],
//   [22, 40],
//   [18, 34],
//   [92, 41],
//   [22, 40],
//   [75, 40],
//   [59, 34],
//   [40],
//   [27, 14],
//   [34],
//   [14],
//   [13, 34],
//   [40],
//   [18, 41],
// ];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === "NumberContainers") {
//     continue;
//   } else if (a[i] === "change") {
//     numberContainers.change(b[i][0], b[i][1]);
//   } else {
//     console.log(numberContainers.find(b[i][0]));
//   }
// }
