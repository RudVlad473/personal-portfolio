import { conveyUp as conveyUpAction, resetPatterns } from "../../model/actions"
import { conveyerPatternsReducer } from "../../model/reducer"
import { TPatterns } from "../types"
import { useCallback, useEffect, useReducer } from "react"

export function useConveyerPatterns(initPatterns: TPatterns) {
  //handle translation (conveying) logic
  const [conveyerPatterns, dispatchConveyerPatterns] = useReducer(
    conveyerPatternsReducer,
    initPatterns.map(({ id }) => ({ id }))
  )

  //sync conveyed patterns and default ones
  useEffect(() => {
    dispatchConveyerPatterns(resetPatterns(initPatterns.map(({ id }) => ({ id }))))
  }, [initPatterns])

  const conveyUp = useCallback(() => {
    dispatchConveyerPatterns(conveyUpAction())
  }, [])

  return {
    conveyerPatterns,
    conveyUp,
  }
}
