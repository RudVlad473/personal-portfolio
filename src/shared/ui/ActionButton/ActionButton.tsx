import styles from "./ActionButton.module.scss"
import { motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"

type ActionButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

export const ActionButton: FC<ActionButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      initial={{
        transform: "scale(1) rotate(0deg)",
      }}
      whileHover={{
        transform: "scale(1.15) rotate(35deg)",
      }}
      transition={{
        duration: 0.5,
      }}
      onClickCapture={onClick}
      className={styles["action-button"]}>
      {children}
    </motion.button>
  )
}
