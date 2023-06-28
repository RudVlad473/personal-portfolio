import { patternHeight, patternWidth } from "../../../consts"
import bubbleStyles from "../../../lib/stylesheets/animated-bubble.module.scss"
import { FC } from "react"

export const CirclePattern2: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={patternWidth}
      height={patternHeight}
      className={bubbleStyles["animated-bubbles"]}>
      <g
        fill="none"
        stroke="#d11033"
        strokeWidth={2}>
        <circle
          cx={653}
          cy={414}
          r={134}
        />
        <circle
          cx={523}
          cy={138}
          r={49}
        />
        <circle
          cx={152}
          cy={139}
          r={58}
        />
        <circle
          cx={170}
          cy={464}
          r={48}
        />
      </g>
    </svg>
  )
}
