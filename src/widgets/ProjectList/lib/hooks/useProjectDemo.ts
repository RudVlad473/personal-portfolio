import { useLayoutEffect, useState } from "react"

export function useProjectDemo(demoRef: React.RefObject<HTMLDivElement>) {
  const [demoTransformation, setDemoTransformation] = useState<{
    x: number
    y: number
    scale: number
  }>({
    x: 0,
    y: 0,
    scale: 0,
  })

  useLayoutEffect(() => {
    const elem = demoRef.current?.getBoundingClientRect()

    if (!elem) {
      return
    }

    const elemWidth = elem.width
    const elemHeight = elem.height

    const elemClientX = elem.x
    const elemClientY = elem.y

    const windowWidth = window.innerWidth || document.documentElement.clientWidth
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    const distanceToCenterWidth = elemClientX - windowWidth / 2 - elemWidth / 2
    const distanceToCenterHeight = windowHeight / 2 + elemHeight / 2

    const windowToElemRatio =
      windowWidth / elemWidth / (windowHeight / elemHeight) +
      windowHeight / elemHeight / (windowWidth / elemWidth)

    setDemoTransformation(({ x, y, scale }) => {
      const isOnInitialSpot = x === 0 && y === 0

      const scalePadding = 0

      const paddedScale = windowToElemRatio - windowToElemRatio * scalePadding

      const finalScale = paddedScale > 1 ? paddedScale : 1

      return isOnInitialSpot
        ? { x: distanceToCenterWidth, y: distanceToCenterHeight, scale: finalScale }
        : { x, y, scale }
    })
  }, [demoRef])

  return demoTransformation
}
