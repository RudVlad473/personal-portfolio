import { Link } from "../../../../shared/ui/Link"
import { CONTACTS } from "../../lib/consts/contacts"
import styles from "./ContactList.module.scss"
import { motion } from "framer-motion"
import { FC } from "react"

export const ContactList: FC = () => {
  return (
    <ul className={styles["contact-list"]}>
      {CONTACTS.map(({ link, logo }) => (
        <motion.li
        initial={{
          transformOrigin: 'center center'
        }}
          whileHover={{
            scale: 1.25,
          }}
          key={link}
          className={styles.contact}>
          <Link
            url={link}
            isPlain
            toNewPage>
            {logo}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
