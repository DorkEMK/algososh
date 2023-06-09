export function swap<T>(
    arr: T[],
    firstIndex: number,
    secondIndex: number
  ): void {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }
