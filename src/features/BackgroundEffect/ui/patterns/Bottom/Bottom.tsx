import { BOTTOM_WAVES_PATTERNS, bottomHeight, bottomWidth } from "../../../consts"
import { TBottomWave, TBottomWaves } from "../../../lib/types"
import { generateRandomTimingFunction } from "../../../lib/utils"
import styles from "./Bottom.module.scss"
import { CSSProperties, FC, memo, useMemo } from "react"

const patterns = BOTTOM_WAVES_PATTERNS

export const Bottom: FC = memo(() => {
  const randomTimingFunctions = useMemo<
    (Pick<TBottomWaves[number], "id"> & Pick<CSSProperties, "animationTimingFunction">)[]
  >(
    () =>
      patterns.map(({ id }) => ({
        id,
        animationTimingFunction: generateRandomTimingFunction(),
      })),
    []
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={bottomWidth}
      height={bottomHeight}
      className={styles.bottom}>
      {patterns.map((props) => {
        const { animationTimingFunction } = randomTimingFunctions.find(
          (func) => func.id === props.id
        )!

        return (
          <path
            key={props.fill}
            className={styles.wave}
            style={{ animationTimingFunction }}
            {...props}
          />
        )
      })}
    </svg>
  )
})
