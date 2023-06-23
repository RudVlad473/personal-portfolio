import styles from "./ResumeIcon.module.scss"
import { FC } from "react"

export const ResumeIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={styles.resumeicon}>
      <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm7 2h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2zM6 7h2v2H6V7zm0 4h2v2H6v-2zm0 4h2v2H6v-2z" />
    </svg>
  )
}
