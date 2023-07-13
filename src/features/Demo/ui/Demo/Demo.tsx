import { TDemo, TProject } from "../../../../widgets/ProjectList/lib/types"
import styles from "./Demo.module.scss"
import classNames from "classnames"
import { FC, forwardRef } from "react"

const typeStyleMap: Record<TDemo, string> = {
  [TDemo.DESKTOP]: styles["demo--desktop"],
  [TDemo.MOBILE]: styles["demo--mobile"],
}

type DemoProps = NonNullable<TProject["demo"]> & {
  isDisabled: boolean
}

export const Demo = forwardRef<HTMLDivElement, DemoProps>(
  ({ type, url, isDisabled = false }, ref) => {
    return (
      <div
        className={styles.wrapper}
        ref={ref}>
        <img
          className={classNames(styles.demo, typeStyleMap[type], {
            [styles["demo--disabled"]]: isDisabled,
          })}
          src={url}
          alt={type === TDemo.DESKTOP ? "Desktop demo" : "Mobile demo"}
        />
      </div>
    )
  }
)
