import { DarkBackgroundContext } from "../context"
import { useContext } from "react"

export function useDarkBackgroundContext() {
  const darkBgContext = useContext(DarkBackgroundContext)

  return darkBgContext
}
