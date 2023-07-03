import styles from "./Portal.module.scss"
import { FC, PropsWithChildren, memo } from "react"
import { createPortal } from "react-dom"

type PortalProps = PropsWithChildren

export const Portal = memo<PortalProps>(({ children }) => {
  return <>{createPortal(children, document.body)}</>
})
  