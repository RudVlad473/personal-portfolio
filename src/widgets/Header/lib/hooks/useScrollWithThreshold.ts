import { useWindowEvent } from "../../../../shared/lib/hooks"
import { getCurrentScrollPercentage } from "../../../../shared/lib/utils"
import { scrollPercentageThreshold } from "../../consts"
import { useCallback, useEffect, useRef, useState } from "react"

const initScrollPercentage = getCurrentScrollPercentage()

export function useScrollWithThreshold(
  onScrollWithThreshold?: (scrollPercentage: number) => void,
  threshold = scrollPercentageThreshold
) {
  const lastScrollValueRef = useRef<number>(initScrollPercentage)

  const [scrollPercentage, setScrollPercentage] = useState<number>(() => initScrollPercentage)

  const handleScroll = useCallback(() => {
    const currentScrollPercentage = getCurrentScrollPercentage()

    setScrollPercentage((prevScrollValue) => {
      const lastScrollPercentage = lastScrollValueRef.current

      const hasPassedThreshold =
        Math.abs(currentScrollPercentage - lastScrollPercentage) > threshold

      let newScrollPercentage = lastScrollPercentage

      if (hasPassedThreshold) {
        newScrollPercentage = currentScrollPercentage

        lastScrollValueRef.current = prevScrollValue
      }

      return newScrollPercentage
    })
  }, [threshold])

  useWindowEvent("scroll", handleScroll)

  useEffect(() => {
    if (scrollPercentage !== lastScrollValueRef.current) {
      onScrollWithThreshold?.(scrollPercentage)
    }
  }, [onScrollWithThreshold, scrollPercentage])

  return {
    scrollPercentage,
  }
}
