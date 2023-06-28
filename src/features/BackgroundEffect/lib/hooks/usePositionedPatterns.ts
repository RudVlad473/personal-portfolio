import { patternColumnCount } from "../../consts"
import { TPattern, TPosition, TPositionedPatterns } from "../types"
import { useMemo } from "react"

export function usePositionedPatterns(initPatterns: Pick<TPattern, "id">[]) {
  const positionedPatterns = useMemo<TPositionedPatterns>(
    () =>
      initPatterns.map(({ id }, index) => {
        const pivotColumn = Math.round((patternColumnCount - 1) / 2)
        const currentPatternColumn = index % patternColumnCount

        const position: TPosition =
          currentPatternColumn < pivotColumn ? TPosition.LEFT : TPosition.RIGHT

        const rotated = currentPatternColumn < patternColumnCount

        return {
          id,
          position,
          rotated,
        }
      }),
    [initPatterns]
  )

  return {
    positionedPatterns,
  }
}
