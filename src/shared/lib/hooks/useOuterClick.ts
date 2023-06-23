import React, { useEffect } from "react"

export function useOuterClick<T extends Element>(
  ref: React.RefObject<T>,
  onOuterClick: () => void
) {
  useEffect(() => {
    const handleOuterClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOuterClick()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOuterClick()
      }
    }

    const handleClickOrEscape = (event: MouseEvent | KeyboardEvent) => {
      handleOuterClick(event as MouseEvent)
      handleEscapeKey(event as KeyboardEvent)
    }

    document.addEventListener("mousedown", handleClickOrEscape)
    document.addEventListener("keydown", handleClickOrEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOrEscape)
      document.removeEventListener("keydown", handleClickOrEscape)
    }
  }, [ref, onOuterClick])
}
