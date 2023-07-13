import { withAppContext } from "./withAppContext"
import { withBackgroundEffects } from "./withBackgroundEffects"
import { withDarkBackground } from "./withDarkBackground"
import compose from "compose-function"

export const withProviders = compose(withAppContext, withBackgroundEffects, withDarkBackground)
