import styles from "./DarkBackground.module.scss"
import classNames from "classnames"
import { FC } from "react"

type DarkBackgroundProps = {
  isActive: boolean
}

export const DarkBackground: FC<DarkBackgroundProps> = ({ isActive }) => {
  return (
    <div
      className={classNames(styles.darkbackground, {
        [styles["darkbackground--active"]]: isActive,
      })}></div>
  )
}
