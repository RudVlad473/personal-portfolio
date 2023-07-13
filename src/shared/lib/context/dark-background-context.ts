/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react"

export type TDarkBackgroundContext = {
  isBgActive: boolean
  toggleBg: (value?: boolean) => void
}

export const darkBackgroundContextInitValue: TDarkBackgroundContext = {
  isBgActive: false,
  toggleBg: () => {},
}

export const DarkBackgroundContext = createContext<TDarkBackgroundContext>(
  darkBackgroundContextInitValue
)

export const DarkBackgroundContextProvider = DarkBackgroundContext.Provider
