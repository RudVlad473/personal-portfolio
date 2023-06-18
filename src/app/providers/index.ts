import { withAppContext } from "./withAppContext"
import compose from "compose-function"

export const withProviders = compose(withAppContext)
