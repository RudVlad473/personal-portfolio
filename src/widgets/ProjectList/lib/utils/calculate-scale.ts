export function calculateScale(
  elementWidth: number,
  elementHeight: number,
  windowWidth: number,
  windowHeight: number
) {
  const widthScale = windowWidth / elementWidth
  const heightScale = windowHeight / elementHeight
  return Math.min(widthScale, heightScale)
}
