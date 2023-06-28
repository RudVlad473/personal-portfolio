import { patternHeight, patternWidth } from "../../../consts"
import bubbleStyles from "../../../lib/stylesheets/animated-bubble.module.scss"
import { FC } from "react"

export const CirclePattern1: FC = () => {
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
          cx={270}
          cy={433}
          r={134}
        />
        <circle
          cx={711}
          cy={371}
          r={49}
        />
        <circle
          cx={221}
          cy={166}
          r={64}
        />
        <circle
          cx={511}
          cy={181}
          r={132}
        />
      </g>
    </svg>
  )
}
