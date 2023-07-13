import { calculateScale } from "../utils"
import { useLayoutEffect, useState } from "react"

export function useProjectDemo(demoRef: React.RefObject<HTMLDivElement>) {
  const [demoTransformation, setDemoTransformation] = useState({
    x: 0,
    y: 0,
    scale: 0,
  })

  useLayoutEffect(() => {
    const element = demoRef.current
    const elementRect = element?.getBoundingClientRect()

    if (!element || !elementRect) {
      return
    }

    const elementWidth = elementRect.width
    const elementHeight = elementRect.height
    const elementClientX = elementRect.x
    // const elementClientY = elementRect.y
    const windowWidth = window.innerWidth || document.documentElement.clientWidth
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    const distanceToCenterWidth = elementClientX - windowWidth / 2 + elementWidth / 2
    const distanceToCenterHeight = windowHeight / 2 - elementHeight / 2

    const scale = calculateScale(elementWidth, elementHeight, windowWidth, windowHeight)

    setDemoTransformation(({ x, y, scale: prevScale }) => {
      const isOnInitialSpot = x === 0 && y === 0
      const scalePadding = 0.35
      const paddedScale = scale - scale * scalePadding
      const finalScale = paddedScale > 1 ? paddedScale : 1

      return isOnInitialSpot
        ? { x: distanceToCenterWidth / finalScale, y: distanceToCenterHeight, scale: finalScale }
        : { x, y, scale: prevScale }
    })
  }, [demoRef])

  return demoTransformation
}
