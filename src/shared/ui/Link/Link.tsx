import styles from "./Link.module.scss"
import classNames from "classnames"
import { FC, PropsWithChildren } from "react"

type LinkProps = PropsWithChildren<{
  url?: string
  toNewPage?: boolean
  isPlain?: boolean
  onClick?: () => void
}>

export const Link: FC<LinkProps> = ({ children, url = "", toNewPage = true, isPlain = false }) => {
  return (
    <a
      className={classNames(styles.link, {
        [styles["link--animated"]]: !isPlain,
      })}
      href={url}
      target={toNewPage ? "_blank" : "_self"}
      rel="noopener noreferrer">
      {children}
    </a>
  )
}
