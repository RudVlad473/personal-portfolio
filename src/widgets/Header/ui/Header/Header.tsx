import { useScrollTo } from "../../../../shared/lib/hooks"
import { Link } from "../../../../shared/ui/Link"
import { calculatePagePercentage } from "../../lib/utils"
import { ArrowIcon } from "../ArrowIcon"
import styles from "./Header.module.scss"
import { FC } from "react"

export const Header: FC = () => {
  const { scrollToBottom, scrollToTop } = useScrollTo()

  function handleOnArrowClick() {
    const scrollPercentage = calculatePagePercentage()

    const isOnTop = scrollPercentage < 50

    isOnTop ? scrollToBottom() : scrollToTop()
  }

  return (
    <nav className={styles.header}>
      <span>
        <Link
          onClick={handleOnArrowClick}
          toNewPage={false}
          isPlain>
          <ArrowIcon />
        </Link>
      </span>
      <span className={styles.contacts}>
        <Link
          onClick={scrollToBottom}
          toNewPage={false}>
          Contacts
        </Link>
      </span>
    </nav>
  )
}
