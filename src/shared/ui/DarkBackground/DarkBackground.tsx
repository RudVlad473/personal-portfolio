import styles from "./DarkBackground.module.scss"
import classNames from "classnames"
import { FC, memo } from "react"

type DarkBackgroundProps = {
  isActive: boolean
}

export const DarkBackground: FC<DarkBackgroundProps> = memo(({ isActive }) => {
  return (
    <div
      className={classNames(styles.darkbackground, {
        [styles["darkbackground--active"]]: isActive,
      })}
    />
  )
})
