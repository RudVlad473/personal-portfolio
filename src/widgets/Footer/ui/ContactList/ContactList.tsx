import { Tag } from "../../../../features/Tag/ui"
import contacts from "../../lib/data/contacts.json"
import styles from "./ContactList.module.scss"
import { FC } from "react"

export const ContactList: FC = () => {
  return (
    <ul className={styles["contact-list"]}>
      {contacts.map(({ link, provider }) => (
        <li
          key={provider}
          className={styles.contact}>
          <Tag
            label={provider}
            link={link}
          />
        </li>
      ))}
    </ul>
  )
}
