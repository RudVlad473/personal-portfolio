import { generateRandomInteger } from "../../../../shared/lib/utils"

const timingFunctions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear"] as const

export function generateRandomTimingFunction(notToEqual?: typeof timingFunctions) {
  let randomIndex = 0

  if (notToEqual === undefined) {
    randomIndex = generateRandomInteger(0, timingFunctions.length - 1)
  } else {
    randomIndex = generateRandomInteger(
      0,
      timingFunctions.length - 1,
      timingFunctions.findIndex((value) => value === notToEqual)
    )
  }

  const randomTimingFunction = timingFunctions[randomIndex]

  return randomTimingFunction
}
