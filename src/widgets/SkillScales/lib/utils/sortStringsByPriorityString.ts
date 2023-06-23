export function sortStringsByPriorityString(
  strsToSort: string[],
  priorityStrs: string[]
): string[] {
  const strs1 = new Set(strsToSort)
  const strs2 = new Set(priorityStrs)

  for (const priorityStr of strs2) {
    strs1.delete(priorityStr)
  }

  const sortedString = priorityStrs.concat(Array.from(strs1))

  return sortedString
}
