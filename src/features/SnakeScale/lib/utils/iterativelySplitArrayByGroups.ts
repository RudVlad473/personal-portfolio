export function iterativelySplitArrayByGroups<T>(arr: T[], groupSizes: number[]): T[][] {
  const splittedArr: T[][] = []

  let currentGroupSizeIndex = 0,
    lastIndexOfSplit = 0
  for (let i = 0; i < arr.length; ) {
    const currentGroupSize = groupSizes[currentGroupSizeIndex]

    splittedArr.push(arr.slice(lastIndexOfSplit, lastIndexOfSplit + currentGroupSize))

    currentGroupSizeIndex = (currentGroupSizeIndex + 1) % groupSizes.length

    i += currentGroupSize

    lastIndexOfSplit = i
  }

  return splittedArr
}
