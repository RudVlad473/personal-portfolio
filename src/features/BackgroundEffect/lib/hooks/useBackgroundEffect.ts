import { useWindowEvent } from "../../../../shared/lib/hooks"
import { generateRandomInteger } from "../../../../shared/lib/utils"
import { TPatterns } from "../types"
import { uniqueId } from "lodash"
import { FC, useEffect, useMemo, useRef, useState } from "react"

export function useBackgroundEffect(
  initialPatterns: FC[],
  patternWidth: number,
  patternHeight: number
) {
  const [amountOfPatternsToFill, setAmountOfPatternsToFill] = useState<number>(() => 0)
  const [documentHeight, setDocumentHeight] = useState<number>(() => 0)
  const lastPatternIndexRef = useRef<number>(0)

  function handleWindowResize() {
    const body = document.body,
      html = document.documentElement

    const possibleHeights = [
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    ]

    const documentHeight = Math.max(...possibleHeights)

    setDocumentHeight(() => documentHeight)
  }

  useWindowEvent("load", handleWindowResize)

  useEffect(() => {
    const amount = Math.floor(documentHeight / patternHeight)

    const isSpaceLeft = documentHeight % patternHeight > 0

    setAmountOfPatternsToFill(amount)
  }, [documentHeight, patternHeight])

  const patternsToFill: TPatterns = useMemo(() => {
    if (!amountOfPatternsToFill) {
      return []
    }

    const patterns: TPatterns = []

    for (let i = 0; i < amountOfPatternsToFill; i++) {
      const randomIndex = generateRandomInteger(
        0,
        initialPatterns.length - 1,
        lastPatternIndexRef.current
      )

      const randomPattern = initialPatterns[randomIndex]

      patterns.push({
        id: uniqueId("pattern_"),
        pattern: randomPattern,
      })

      lastPatternIndexRef.current = randomIndex
    }

    return patterns
  }, [amountOfPatternsToFill, initialPatterns])

  return {
    patternsToFill,
  } as const
}
