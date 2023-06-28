import { patternHeight, patternWidth } from "../../../consts"
import bubbleStyles from "../../../lib/stylesheets/animated-bubble.module.scss"
import { FC } from "react"

export const CirclePattern3: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={patternWidth}
      height={patternHeight}
      className={bubbleStyles['animated-bubbles']}>
      <g
        fill="none"
        stroke="#d11033"
        strokeWidth={2}>
        <circle
          cx={494}
          cy={154}
          r={134}
        />
        <circle
          cx={347}
          cy={453}
          r={49}
        />
        <circle
          cx={167}
          cy={184}
          r={130}
        />
        <circle
          cx={738}
          cy={425}
          r={54}
        />
      </g>
    </svg>
  )
}
