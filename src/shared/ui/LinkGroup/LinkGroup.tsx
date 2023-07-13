import { TLinkAction } from "../../lib/types"
import { ActionButton } from "../ActionButton"
import { Link } from "../Link"
import styles from "./LinkGroup.module.scss"
import { FC, memo } from "react"

type TLink = TLinkAction & {
  icon: () => React.ReactNode
}

type LinkGroupProps = {
  links: TLink[]
}

export const LinkGroup = memo<LinkGroupProps>(({ links }) => {
  return (
    <ul className={styles["link-group"]}>
      {links.map(({ icon, ...props }, index) => (
        <li
          key={index}
          className={styles.link}>
          <Link
            {...props}
            isPlain
            toNewPage>
            <ActionButton>{icon()}</ActionButton>
          </Link>
        </li>
      ))}
    </ul>
  )
})
