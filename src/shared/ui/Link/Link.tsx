import { TLinkAction } from "../../lib/types"
import styles from "./Link.module.scss"
import classNames from "classnames"
import { FC, PropsWithChildren } from "react"

type LinkProps = PropsWithChildren<
  TLinkAction & {
    toNewPage?: boolean
    isPlain?: boolean
  }
>

export const Link: FC<LinkProps> = ({
  children,
  url = "",
  toNewPage = true,
  isPlain = false,
  onClick,
}) => {
  return (
    <a
      className={classNames(styles.link, { [styles["link--animated"]]: !isPlain }, "ellipsis")}
      href={url}
      target={toNewPage ? "_blank" : "_self"}
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!onClick) {
          return
        }

        e.preventDefault()
        onClick?.()
      }}>
      {children}
    </a>
  )
}
