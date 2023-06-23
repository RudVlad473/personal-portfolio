import { useCallback } from "react"

export function useScrollTo<T extends Element>(elementRef?: React.RefObject<T>) {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const scrollToBottom = useCallback(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight })
  }, [])

  const scrollToElement = useCallback(() => {
    const elem = elementRef?.current

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }, [elementRef])

  return {
    scrollToTop,
    scrollToBottom,
    scrollToElement,
  }
}
