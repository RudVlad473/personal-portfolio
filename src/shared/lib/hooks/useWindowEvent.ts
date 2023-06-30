import { useEffect, useRef } from "react"

type EventCallback<T extends Event = Event> = (event: T) => void
type EventType = keyof WindowEventMap

export const useWindowEvent = <T extends Event = Event>(
  eventType: EventType,
  callback: EventCallback<T>
) => {
  const callbackRef = useRef<EventCallback<T>>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const eventListener = (event: Event) => {
      if (callbackRef.current) {
        callbackRef.current(event as T)
      }
    }

    window.addEventListener(eventType, eventListener)

    return () => window.removeEventListener(eventType, eventListener)
  }, [eventType])
}
