import { patternHeight, patternWidth } from "../../../consts"
import { TCircles } from "../../../lib/types"
import { generateRandomTimingFunction } from "../../../lib/utils"
import styles from "./Circle.module.scss"
import classNames from "classnames"
import { FC } from "react"

type CircleProps = {
  circles: TCircles
}

export const Circle: FC<CircleProps> = ({ circles }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={patternWidth}
      height={patternHeight}
      className={classNames(styles["animated-bubbles"], styles.circle)}>
      <g fill="none">
        {circles.map((circleProps) => (
          <circle
            style={{ animationTimingFunction: generateRandomTimingFunction() }}
            key={String(circleProps.cx) + String(circleProps.cy) + String(circleProps.r)}
            {...circleProps}
          />
        ))}
      </g>
    </svg>
  )
}
