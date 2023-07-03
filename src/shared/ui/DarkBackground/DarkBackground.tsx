import styles from "./DarkBackground.module.scss"
import classNames from "classnames"
import { forwardRef } from "react"

type DarkBackgroundProps = {
  isActive: boolean
}

export const DarkBackground = forwardRef<HTMLDivElement, DarkBackgroundProps>(
  ({ isActive }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.darkbackground, {
          [styles["darkbackground--active"]]: isActive,
        })}
      />
    )
  }
)
