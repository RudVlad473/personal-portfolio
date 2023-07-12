import { useScrollTo } from "../../../../shared/lib/hooks"
import { Link } from "../../../../shared/ui/Link"
import { headerTimeoutMs } from "../../consts"
import { useScrollWithThreshold } from "../../lib/hooks"
import { calculatePagePercentage } from "../../lib/utils"
import { ArrowIcon } from "../ArrowIcon"
import styles from "./Header.module.scss"
import classNames from "classnames"
import { FC, useEffect, useRef, useState } from "react"

export const Header: FC = () => {
  const { scrollToBottom, scrollToTop } = useScrollTo()

  function handleOnArrowClick() {
    const scrollPercentage = calculatePagePercentage()

    const isOnTop = scrollPercentage < 50

    isOnTop ? scrollToBottom() : scrollToTop()
  }

  const [shouldDisable, setShouldDisable] = useState<boolean>(false)

  const { scrollPercentage } = useScrollWithThreshold()

  const latestScrollValueRef = useRef<number>(0)

  useEffect(() => {
    let disabledHeaderTimeout: number

    const hasBeenScrolled = Math.abs(scrollPercentage - latestScrollValueRef.current) > 0

    if (hasBeenScrolled) {
      setShouldDisable((disabled) => !disabled)

      disabledHeaderTimeout = setTimeout(() => {
        setShouldDisable(false)
      }, headerTimeoutMs)
    }

    latestScrollValueRef.current = scrollPercentage

    return () => clearTimeout(disabledHeaderTimeout)
  }, [scrollPercentage])

  return (
    <nav
      className={classNames(styles.header, {
        [styles["header--disabled"]]: shouldDisable,
      })}>
      <span className={styles.arrow}>
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
