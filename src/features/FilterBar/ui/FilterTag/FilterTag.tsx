import { TFilterTag } from "../../lib/types"
import { CrossIcon } from "../CrossIcon"
import styles from "./FilterTag.module.scss"
import { FC } from "react"

type FilterTagProps = TFilterTag & {
  onDelete: ({ value }: TFilterTag) => void
}

export const FilterTag: FC<FilterTagProps> = ({ value, onDelete }) => {
  return (
    <div className={styles.tag}>
      <span className={styles.value}>{value}</span>
      
      <span
        className={styles.cross}
        onClick={() => onDelete({ value })}>
        <CrossIcon />
      </span>
    </div>
  )
}
