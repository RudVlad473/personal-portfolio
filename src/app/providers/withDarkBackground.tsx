import { DarkBackgroundContextProvider } from "../../shared/lib/context"
import { useBooleanState } from "../../shared/lib/hooks"
import { DarkBackground } from "../../shared/ui/DarkBackground"
import { Portal } from "../../shared/ui/Portal"

export const withDarkBackground = (component: () => React.ReactNode) => () => {
  const [isBgActive, { toggle: toggleBg }] = useBooleanState(false)

  return (
    <>
      <DarkBackgroundContextProvider value={{ isBgActive, toggleBg }}>
        {component()}
      </DarkBackgroundContextProvider>
      <Portal>
        <DarkBackground isActive={isBgActive} />
      </Portal>
    </>
  )
}
