import { TSeparatorTypes } from "../../lib/types/separator"
import styles from "./Separator.module.scss"
import classNames from "classnames"
import { FC } from "react"

type SeparatorProps = {
  type?: TSeparatorTypes
}

const separatorTypeClassMap: Record<TSeparatorTypes, string> = {
  [TSeparatorTypes.DOTTED]: styles["separator--dotted"],
  [TSeparatorTypes.LINED]: styles["separator--lined"],
}

export const Separator: FC<SeparatorProps> = ({ type = TSeparatorTypes.DOTTED }) => {
  const className = classNames(styles.separator, separatorTypeClassMap[type])

  return <hr className={className} />
}
