import { useWindowEvent } from "../../../../shared/lib/hooks"
import { getCurrentScrollPercentage } from "../../../../shared/lib/utils"
import { scrollPercentageThreshold } from "../../consts"
import { useCallback, useState } from "react"

export function useScrollWithThreshold(threshold = scrollPercentageThreshold) {
  const [scrollPercentage, setScrollPercentage] = useState<number>(() =>
    getCurrentScrollPercentage()
  )

  const handleScroll = useCallback(() => {
    const currentScrollPercentage = getCurrentScrollPercentage()

    setScrollPercentage((prevPercentage) => {
      const hasPassedThreshold = Math.abs(currentScrollPercentage - prevPercentage) > threshold

      return hasPassedThreshold ? currentScrollPercentage : prevPercentage
    })
  }, [threshold])

  useWindowEvent("scroll", handleScroll)

  return {
    scrollPercentage,
  }
}
