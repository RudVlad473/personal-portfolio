import { ContactList } from "../ContactList"
import styles from "./Footer.module.scss"
import { FC } from "react"

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div>
        <ContactList />
      </div>
    </div>
  )
}
