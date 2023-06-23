import styles from "./ActionButton.module.scss"
import { FC, PropsWithChildren } from "react"

type ActionButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

export const ActionButton: FC<ActionButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles["action-button"]}>
      {children}
    </button>
  )
}
