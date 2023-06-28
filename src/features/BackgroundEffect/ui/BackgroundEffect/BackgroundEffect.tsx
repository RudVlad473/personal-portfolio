import { patternHeight, patternWidth } from "../../consts"
import { conveyerAnimationSpeed } from "../../consts/ts/animation"
import { useBackgroundEffect, useConveyerPatterns, usePositionedPatterns } from "../../lib/hooks"
import { ConveyerPatternEntity, TPosition, TPositionedPattern } from "../../lib/types"
import { CirclePattern1 } from "../patterns/CirclePattern1"
import { CirclePattern2 } from "../patterns/CirclePattern2"
import { CirclePattern3 } from "../patterns/CirclePattern3"
import { CirclePattern4 } from "../patterns/CirclePattern4"
import { CirclePattern5 } from "../patterns/CirclePattern5"
import styles from "./BackgroundEffect.module.scss"
import classNames from "classnames"
import { FC, useMemo } from "react"

const positionStyleMap: Record<TPosition, string> = {
  [TPosition.LEFT]: styles["effect--left"],
  [TPosition.RIGHT]: styles["effect--right"],
  [TPosition.CENTER]: styles["effect--center"],
}

const patterns = [CirclePattern1, CirclePattern2, CirclePattern3, CirclePattern4, CirclePattern5]

export const BackgroundEffect: FC = () => {
  const { patternsToFill } = useBackgroundEffect(patterns, patternWidth, patternHeight)

  const { conveyerPatterns } = useConveyerPatterns(patternsToFill)

  const { positionedPatterns } = usePositionedPatterns(patternsToFill)

  const finalPatterns = useMemo<(ConveyerPatternEntity & TPositionedPattern)[]>(
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

  // console.log(
  //   finalPatterns.map(({ id, position, rotated, translationCount }, index) => {
  //     const pattern = patternsToFill.find((pattern) => pattern.id === id)!.id

  //     console.log({
  //       pattern,
  //       translationCount,
  //     })
  //   })
  // )

  return (
    <ul
      className={classNames(styles["container"], {
        [styles["container--active"]]: conveyerPatterns.length > 0,
      })}>
      {finalPatterns.map(({ id, position, rotated, translationCount }, index) => {
        const PatternComponent = patternsToFill.find((pattern) => pattern.id === id)!.pattern


        return (
          <li
            id={id}
            key={id}
            style={{
              
              transform: `translateY(${translationCount * patternHeight}px)`,
            }}
            className={classNames(styles.effect, positionStyleMap[position], {
              [styles["effect--flipped"]]: rotated,
            })}>
            <PatternComponent />
          </li>
        )
      })}
    </ul>
  )
}
