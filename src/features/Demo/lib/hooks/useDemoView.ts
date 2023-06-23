import { useState, useCallback } from "react"

export function useDemoView<T extends Element>(isDisabled: boolean) {
  const [demoTransformation, setDemoTransformation] = useState<{
    x: number
    y: number
    scale: number
  }>({
    x: 0,
    y: 0,
    scale: 0,
  })

  const handleEnableView = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isDisabled) {
        return
      }

      const elem = event.currentTarget.getBoundingClientRect()

      const elemWidth = elem.width
      const elemHeight = elem.height

      const elemClientX = elem.x
      const elemClientY = elem.y

      const windowWidth = window.innerWidth || document.documentElement.clientWidth
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      const distanceToCenterWidth = elemClientX - windowWidth / 2 - elemWidth / 2
      const distanceToCenterHeight = windowHeight / 2 - elemClientY + elemHeight / 2
      const windowToElemRatio = Math.min(windowHeight / elemHeight, windowWidth / elemWidth)

      setDemoTransformation(({ x, y, scale }) => {
        const isOnInitialSpot = x === 0 && y === 0

        const scalePadding = 0.5

        const finalScale =
          windowToElemRatio - scalePadding > 1 ? windowToElemRatio - scalePadding : 1

        return isOnInitialSpot
          ? { x: distanceToCenterWidth, y: distanceToCenterHeight, scale: finalScale }
          : { x, y, scale }
      })
    },
    [isDisabled]
  )

  const handleDisableView = useCallback(() => {
    if (isDisabled) {
      return
    }

    setDemoTransformation(() => ({ x: 0, y: 0, scale: 0 }))
  }, [isDisabled])

  return {
    demoTransformation,
    handleEnableView,
    handleDisableView,
  }
}
