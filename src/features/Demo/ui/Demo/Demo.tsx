import { TDemo, TProject } from "../../../../widgets/ProjectList/lib/types"
import styles from "./Demo.module.scss"
import classNames from "classnames"
import { FC } from "react"

type DemoProps = NonNullable<TProject["demo"]>

export const Demo: FC<DemoProps> = ({ type, url }) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={classNames(
          styles.demo,
          type === TDemo.DESKTOP ? styles["demo--desktop"] : styles["demo--mobile"]
        )}
        src={url}
        alt={type === TDemo.DESKTOP ? "Desktop demo" : "Mobile demo"}
      />
    </div>
  )
}
