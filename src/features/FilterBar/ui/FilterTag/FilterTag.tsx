import { TFilterTag } from "../../lib/types"
import styles from "./FilterTag.module.scss"
import classNames from "classnames"
import { FC } from "react"

type FilterTagProps = TFilterTag & {
  onDelete: ({ value }: TFilterTag) => void
}

export const FilterTag: FC<FilterTagProps> = ({ value, onDelete }) => {
  return (
    <div
      className={styles.cube}
      onClick={() => onDelete({ value })}
      data-value={value}>
      {value}
    </div>
  )
}
