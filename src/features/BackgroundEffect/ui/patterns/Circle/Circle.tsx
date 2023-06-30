import { patternHeight, patternWidth } from "../../../consts"
import { TCircles } from "../../../lib/types"
import { generateRandomTimingFunction } from "../../../lib/utils"
import styles from "./Circle.module.scss"
import classNames from "classnames"
import { FC, useRef } from "react"

type CircleProps = {
  circles: TCircles
}

export const Circle: FC<CircleProps> = ({ circles }) => {
  const lastTimingRef = useRef<ReturnType<typeof generateRandomTimingFunction> | undefined>(
    undefined
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={patternWidth}
      height={patternHeight}
      className={classNames(styles["animated-bubbles"], styles.circle)}>
      <g fill="none">
        {circles.map((circleProps) => {
          const randomTimingFunction = generateRandomTimingFunction(lastTimingRef.current)

          lastTimingRef.current = randomTimingFunction

          return (
            <circle
              style={{ animationTimingFunction: randomTimingFunction }}
              key={String(circleProps.cx) + String(circleProps.cy) + String(circleProps.r)}
              {...circleProps}
            />
          )
        })}
      </g>
    </svg>
  )
}
