import { PropsWithChildren, memo, useId } from "react"
import { createPortal } from "react-dom"

type PortalProps = PropsWithChildren

export const Portal = memo<PortalProps>(({ children }) => {
  const id = useId()
  return <>{createPortal(children, document.body, id)}</>
})
