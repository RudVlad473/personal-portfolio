import { useProjectFiltersContext, useProjectsContext } from "../../../../shared/lib/hooks"
import { ActionButton } from "../../../../shared/ui/ActionButton"
import { CrossIcon } from "../CrossIcon"
import { FilterTag } from "../FilterTag"
import styles from "./FilterBar.module.scss"
import { FC, useCallback } from "react"

export const FilterBar: FC = () => {
  const filterContext = useProjectFiltersContext()

  const { technologies = [] } = filterContext.filters
  const setFilters = filterContext.setFilters

  const tags = technologies

  const handleOnTechnologyDelete = useCallback(
    (value: string) =>
      setFilters?.((filters) => ({
        ...filters,
        technologies: [...(filters?.technologies || [])].filter(
          (technology) => technology !== value
        ),
      })),
    [setFilters]
  )

  const handleOnTechnologiesClear = useCallback(
    () =>
      setFilters((filters) => ({
        ...filters,
        technologies: [],
      })),
    [setFilters]
  )

  const { projects } = useProjectsContext()

  return (
    <div className={styles["filter-bar"]}>
      <ul className={styles.tags}>
        {tags.length > 0 && <li className={styles.counter}>( {projects.length} )</li>}
        {tags.map((value) => (
          <li key={value}>
            <FilterTag
              value={value}
              onDelete={({ value }) => handleOnTechnologyDelete(value)}
            />
          </li>
        ))}
        {tags.length > 0 && (
          <li>
            <ActionButton onClick={handleOnTechnologiesClear}>
              <CrossIcon />
            </ActionButton>
          </li>
        )}
      </ul>
    </div>
  )
}
