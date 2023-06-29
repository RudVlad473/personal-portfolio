export function generateRandomInteger(min: number, max: number, notToEqual?: number): number {
  let randomNumber: number

  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    if (notToEqual === undefined) {
      break
    }
  } while (randomNumber === notToEqual)

  return randomNumber
}
