import { TFilterTags } from "../../lib/types"
import { FilterTag } from "../FilterTag"
import styles from "./FilterBar.module.scss"
import { FC } from "react"

type FilterBarProps = {
  tags: TFilterTags
  onChange: (payload: string[]) => void
}

export const FilterBar: FC<FilterBarProps> = ({ tags, onChange }) => {
  return (
    <div className={styles["filter-bar"]}>
      <ul className={styles.tags}>
        {tags.map(({ value }) => (
          <li key={value}>
            <FilterTag
              value={value}
              onDelete={({ value }) => {
                console.log("on delete tag")
              }}
            />
          </li>
        ))}
      </ul>

      <button className={styles["clear-btn"]}>Clear tags</button>
    </div>
  )
}
