import { useWindowEvent } from "."
import React, { useCallback } from "react"

export function useOuterClick<T extends Element>(
  ref: React.RefObject<T>,
  onOuterClick: () => void
) {
  const handleOuterClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOuterClick()
      }
    },
    [onOuterClick, ref]
  )

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOuterClick()
      }
    },
    [onOuterClick]
  )

  const handleClickOrEscape = useCallback(
    (event: MouseEvent | KeyboardEvent) => {
      handleOuterClick(event as MouseEvent)
      handleEscapeKey(event as KeyboardEvent)
    },
    [handleEscapeKey, handleOuterClick]
  )

  useWindowEvent("mousedown", handleClickOrEscape)
  useWindowEvent("keydown", handleClickOrEscape)
}
