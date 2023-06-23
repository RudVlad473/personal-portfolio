import styles from "./Portal.module.scss"
import { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

type PortalProps = PropsWithChildren<{}>

export const Portal: FC<PortalProps> = ({ children }) => {
  return <>{createPortal(children, document.body)}</>
}
