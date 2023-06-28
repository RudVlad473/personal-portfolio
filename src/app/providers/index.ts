import { withAppContext } from "./withAppContext"
import { withBackgroundEffects } from "./withBackgroundEffects"
import compose from "compose-function"

export const withProviders = compose(withAppContext, withBackgroundEffects)
