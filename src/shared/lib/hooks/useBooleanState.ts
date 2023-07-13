import { useCallback, useState } from "react"

export function useBooleanState(initialState = false) {
  const [state, setState] = useState<boolean>(() => initialState)

  const setTrue = useCallback(() => setState(true), [])
  const setFalse = useCallback(() => setState(false), [])
  const toggle = useCallback(
    (value?: boolean) => setState((s) => (value === undefined ? !s : value)),
    []
  )

  return [state, { setTrue, setFalse, toggle }] as const
}
