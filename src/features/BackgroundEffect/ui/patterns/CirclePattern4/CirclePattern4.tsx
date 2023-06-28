import { patternHeight, patternWidth } from "../../../consts"
import bubbleStyles from "../../../lib/stylesheets/animated-bubble.module.scss"
import { FC } from "react"

export const CirclePattern4: FC = () => {
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
          cx={311}
          cy={138}
          r={134}
        />
        <circle
          cx={294}
          cy={430}
          r={49}
        />
        <circle
          cx={595}
          cy={169}
          r={53}
        />
        <circle
          cx={754}
          cy={433}
          r={119}
        />
      </g>
    </svg>
  )
}
