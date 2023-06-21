import { useProjectFiltersContext } from "../../../../shared/lib/hooks"
import { TFilterTags } from "../../lib/types"
import { FilterTag } from "../FilterTag"
import styles from "./FilterBar.module.scss"
import { FC } from "react"

type FilterBarProps = {
  tags: TFilterTags
  onChange: (payload: string[]) => void
}

export const FilterBar: FC<FilterBarProps> = ({ tags,  }) => {
  const filterContext = useProjectFiltersContext()

  const setFilters = filterContext?.setFilters

  return (
    <div className={styles["filter-bar"]}>
      <ul className={styles.tags}>
        {tags.map(({ value }) => (
          <li key={value}>
            <FilterTag
              value={value}
              onDelete={({ value }) =>
                setFilters?.((filters) => ({
                  ...filters,
                  technologies: [...(filters?.technologies || [])].filter(
                    (technology) => technology !== value
                  ),
                }))
              }
            />
          </li>
        ))}
      </ul>

      <button
        className={styles["clear-btn"]}
        onClick={() => setFilters?.({})}>
        Clear tags
      </button>
    </div>
  )
}
