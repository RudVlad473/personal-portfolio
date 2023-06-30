import {
  CIRCLE_PATTERNS,
  conveyerAnimationSpeed,
  patternColumnCount,
  patternHeight,
  patternWidth,
} from "../../consts"
import { useBackgroundEffect, useConveyerPatterns, usePositionedPatterns } from "../../lib/hooks"
import { TFinalPatterns, TPosition } from "../../lib/types"
import { BottomCover } from "../BottomCover"
import { Circle } from "../patterns/Circle"
import styles from "./BackgroundEffect.module.scss"
import classNames from "classnames"
import { uniqueId } from "lodash"
import { FC, useCallback, useEffect, useMemo, useState } from "react"

const positionStyleMap: Record<TPosition, string> = {
  [TPosition.LEFT]: styles["effect--left"],
  [TPosition.RIGHT]: styles["effect--right"],
  [TPosition.CENTER]: styles["effect--center"],
}

const conveyTranslationRateMs = conveyerAnimationSpeed * 1000

const paddingPatternsCount = 1

const paddingPatternsRows = paddingPatternsCount * patternColumnCount

const patterns = CIRCLE_PATTERNS.map((pattern) => (
  <Circle
    key={uniqueId("circle_")}
    circles={pattern}
  />
))

export const BackgroundEffect: FC = () => {
  //get patterns to fill the page
  const { patternsToFill, documentSize } = useBackgroundEffect(
    patterns,
    patternWidth,
    patternHeight,
    paddingPatternsRows
  )

  const [translation, setTranslation] = useState<number>(0)

  //position patterns position, so it looks less repetative
  const { positionedPatterns } = usePositionedPatterns(patternsToFill)

  //get conveyer patterns
  const { conveyerPatterns, conveyUp } = useConveyerPatterns(patternsToFill)

  const handleBackgroundTranslation = useCallback(() => {
    setTranslation(() => patternsToFill.length * patternHeight)
    conveyUp()
  }, [conveyUp, patternsToFill.length])

  // convey patterns up by predefined interval
  useEffect(() => {
    const initialTranslationTimeout = setTimeout(handleBackgroundTranslation, 0)

    const translationInterval = setInterval(handleBackgroundTranslation, conveyTranslationRateMs)

    return () => {
      clearInterval(translationInterval)
      clearTimeout(initialTranslationTimeout)
    }
  }, [handleBackgroundTranslation])

  //join all the above
  const finalPatterns = useMemo<TFinalPatterns>(
    () =>
      conveyerPatterns.map((pattern) => {
        const positionPattern = positionedPatterns.find(({ id }) => pattern.id === id)!

        return {
          ...pattern,
          ...positionPattern,
        }
      }),
    [conveyerPatterns, positionedPatterns]
  )

  const shouldShow = finalPatterns.length > 0 && translation > 0

  return (
    <>
      <ul
        className={classNames(styles["container"], {
          [styles["container--active"]]: shouldShow,
        })}>
        {finalPatterns.map(({ id, position, rotated, top }, index, arr) => {
          const PatternComponent = patternsToFill.find((pattern) => pattern.id === id)!.pattern

          const patternsCount = arr.length

          const isConveyerStart = index === patternsCount - 1

          // const initTop = top
          const initTranslation = translation

          const isNewPattern = index > positionedPatterns.findIndex((pattern) => pattern.id === id)

          return (
            <li
              id={id}
              key={id}
              className={classNames(styles.effect, positionStyleMap[position], {
                [styles["effect--flipped"]]: rotated,
              })}
              style={{
                top: isNewPattern
                  ? (patternsCount - paddingPatternsCount) * patternHeight
                  : top * patternHeight,

                transform: `translateY(${isConveyerStart ? 0 : initTranslation}px)`,

                transitionDuration: patternsCount * conveyerAnimationSpeed + "s",
              }}>
              {PatternComponent}
            </li>
          )
        })}
      </ul>
      <footer
        className={classNames(styles.bottom, {
          [styles["bottom--active"]]: shouldShow,
        })}>
        <BottomCover pageWidth={documentSize.width} />
      </footer>
    </>
  )
}
