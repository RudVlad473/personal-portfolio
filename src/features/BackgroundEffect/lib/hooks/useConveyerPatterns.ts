import { useWindowEvent } from "../../../../shared/lib/hooks"
import { conveyerAnimationSpeed } from "../../consts"
import { resetPatterns, conveyUp } from "../../model/actions"
import { conveyerPatternsReducer } from "../../model/reducer"
import { TPatterns } from "../types"
import { useCallback, useEffect, useMemo, useReducer, useState } from "react"

const conveyTranslationRateMs = conveyerAnimationSpeed * 1000

export function useConveyerPatterns(initPatterns: TPatterns) {
  const initConveyerPatterns = useMemo(
    () =>
      initPatterns.map((pattern) => ({
        ...pattern,
        translationCount: 0,
      })),
    [initPatterns]
  )

  //handle translation (conveying) logic
  const [conveyerPatterns, dispatchConveyerPatterns] = useReducer(
    conveyerPatternsReducer,
    initConveyerPatterns,
    (arg) => arg
  )

  //sync conveyed patterns and default ones
  useEffect(() => {
    dispatchConveyerPatterns(resetPatterns(initConveyerPatterns))
  }, [initConveyerPatterns])

  const handleBackgroundTranslation = useCallback(() => dispatchConveyerPatterns(conveyUp()), [])

  // convey patterns up by predefined interval
  useEffect(() => {
    const initialTranslationTimeout = setTimeout(handleBackgroundTranslation, 500)

    const translationInterval = setInterval(handleBackgroundTranslation, conveyTranslationRateMs)

    return () => {
      clearInterval(translationInterval)
      clearTimeout(initialTranslationTimeout)
    }
  }, [handleBackgroundTranslation])

  return {
    conveyerPatterns,
  }
}
