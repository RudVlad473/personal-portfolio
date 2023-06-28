import { patternHeight, patternWidth } from "../../../consts"
import bubbleStyles from "../../../lib/stylesheets/animated-bubble.module.scss"
import { FC } from "react"

export const CirclePattern5: FC = () => {
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
          cx={496}
          cy={376}
          r={134}
        />
        <circle
          cx={180}
          cy={192}
          r={49}
        />
        <circle
          cx={759}
          cy={147}
          r={122}
        />
      </g>
    </svg>
  )
}
