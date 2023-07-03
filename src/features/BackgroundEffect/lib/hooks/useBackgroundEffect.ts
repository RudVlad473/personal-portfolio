import { generateRandomInteger } from "../../../../shared/lib/utils"
import { TPatterns } from "../types"
import { uniqueId } from "lodash"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

export function useBackgroundEffect(
  initialPatterns: React.ReactNode[],
  patternWidth: number,
  patternHeight: number,
  paddingPatterns = 0
) {
  const [amountOfPatternsToFill, setAmountOfPatternsToFill] = useState<number>(() => 0)
  const [documentSize, setDocumentSize] = useState<{ width: number; height: number }>(() => ({
    width: 0,
    height: 0,
  }))
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
    const documentWidth = html.clientWidth

    setDocumentSize(() => ({
      height: documentHeight,
      width: documentWidth,
    }))
  }

  useLayoutEffect(() => {
    handleWindowResize()
  }, [])

  // useWindowEvent("load", handleWindowResize, {
  //   once: true,
  // })

  useEffect(() => {
    const amount = Math.floor(documentSize.height / patternHeight)

    // const isSpaceLeft = documentHeight % patternHeight > 0

    setAmountOfPatternsToFill(() => (amount ? amount + paddingPatterns : 0))
  }, [documentSize, paddingPatterns, patternHeight])

  const patternsToFill: TPatterns = useMemo(() => {
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
    documentSize,
  } as const
}
