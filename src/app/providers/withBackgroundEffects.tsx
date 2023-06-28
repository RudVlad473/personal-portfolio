import { BackgroundEffect } from "../../features/BackgroundEffect/ui"
import { Portal } from "../../shared/ui/Portal"

export const withBackgroundEffects = (component: () => React.ReactNode) => () => {
  return (
    <>
      {component()}
      <Portal>
        <BackgroundEffect />
      </Portal>
    </>
  )
}
