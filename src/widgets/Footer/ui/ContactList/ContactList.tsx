import { Link } from "../../../../shared/ui/Link"
import { CONTACTS } from "../../lib/consts/contacts"
import styles from "./ContactList.module.scss"
import { FC } from "react"

export const ContactList: FC = () => {
  return (
    <ul className={styles["contact-list"]}>
      {CONTACTS.map(({ link, logo }) => (
        <li
          key={link}
          className={styles.contact}>
          <Link
            url={link}
            isPlain
            toNewPage>
            {logo}
          </Link>
        </li>
      ))}
    </ul>
  )
}
