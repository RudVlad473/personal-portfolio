import { useWindowEvent } from "../../../../shared/lib/hooks"
import { getCurrentScrollPercentage } from "../../../../shared/lib/utils"
import { scrollPercentageThreshold } from "../../consts"
import styles from "./ArrowIcon.module.scss"
import { FC, useCallback, useState } from "react"

export const ArrowIcon: FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(() => 0)

  const handleScroll = useCallback(() => {
    const currentScrollPercentage = getCurrentScrollPercentage()

    setScrollPercentage((prevPercentage) =>
      Math.abs(prevPercentage - currentScrollPercentage) > scrollPercentageThreshold
        ? currentScrollPercentage
        : prevPercentage
    )
  }, [])

  useWindowEvent("scroll", handleScroll)

  return (
    <div
      style={{
        transform: `rotate(${scrollPercentage}deg)`,
      }}
      className={styles["arrow"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}>
        <path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" />
      </svg>
    </div>
  )
}
