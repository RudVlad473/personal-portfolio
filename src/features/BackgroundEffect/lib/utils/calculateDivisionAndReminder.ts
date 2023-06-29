export function calculateDivisionAndReminder(
  value: number,
  divider: number
): {
  division: number
  reminder: number
} {

  
  return {
    division: Math.floor(value / divider),
    reminder: +(value % divider > 0),
  }
}
