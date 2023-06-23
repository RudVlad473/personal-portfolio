import { Separator } from "../../../../shared/ui/Separator"
import { ContactList } from "../ContactList"
import styles from "./Footer.module.scss"
import { FC } from "react"

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
        <header className={styles.name}>Vladimir Rudenko</header>

        <Separator />

        <ContactList />
      </div>
    </div>
  )
}
