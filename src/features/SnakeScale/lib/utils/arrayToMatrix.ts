export function arrayToMatrix<T>(
  arr: T[],
  newRowPredicate: (value: T, index: number) => boolean
): T[][] {
  const matrix: T[][] = []

  for (let i = 0, lastCutIndex = 0; i < arr.length; i++) {
    const value = arr[i]
    const isLast = i === arr.length - 1

    if (newRowPredicate(value, i)) {
      matrix.push(arr.slice(lastCutIndex, i))

      lastCutIndex = i
    } else if (isLast) {
      matrix.push(arr.slice(lastCutIndex, i + 1))
    }
  }

  return matrix
}
