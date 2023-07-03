import { generateRandomInteger } from "../../../../shared/lib/utils"
import { TPosition } from "../types"
import { AnimationProps } from "framer-motion"
import { useCallback, useRef } from "react"

const initFullTransitionPercentage = 50

const translationPositionMap: Record<TPosition, number> = {
  [TPosition.FROM_LEFT]: -initFullTransitionPercentage,
  [TPosition.FROM_RIGHT]: initFullTransitionPercentage,
}

export function useAnimation(isInView: boolean) {
  const lastTranslationTweekRef = useRef<number>(0)

  const getAnimationProps = useCallback(
    (animateFrom: TPosition): AnimationProps => {
      const randomTranslationTweek = generateRandomInteger(
        10,
        initFullTransitionPercentage,
        lastTranslationTweekRef.current
      )

      lastTranslationTweekRef.current = randomTranslationTweek

      return {
        initial: {
          opacity: 0,
          transform: `translateX(${translationPositionMap[animateFrom] + randomTranslationTweek}%)`,
        },
        animate: {
          opacity: +isInView,
          transform: isInView
            ? `translateX(0px)`
            : `translateX(${translationPositionMap[animateFrom] + randomTranslationTweek}%)`,
        },
        transition: {
          duration: 1,
        },
      }
    },
    [isInView]
  )

  return {
    getAnimationProps,
  }
}
