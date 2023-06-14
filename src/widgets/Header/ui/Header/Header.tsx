import { Link } from "../../../../shared/ui/Link"
import { ArrowIcon } from "../ArrowIcon"
import styles from "./Header.module.scss"
import { FC } from "react"

export const Header: FC = () => {
  function handleScrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <nav className={styles.header}>
      <span>
        <ArrowIcon />
      </span>
      <span>
        <Link onClick={handleScrollToBottom}>Contacts</Link>
      </span>
    </nav>
  )
}
