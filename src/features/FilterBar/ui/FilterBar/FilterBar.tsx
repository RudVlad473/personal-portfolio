import { useProjectFiltersContext, useProjectsContext } from "../../../../shared/lib/hooks"
import { ActionButton } from "../../../../shared/ui/ActionButton"
import { CrossIcon } from "../CrossIcon"
import { FilterTag } from "../FilterTag"
import styles from "./FilterBar.module.scss"
import classNames from "classnames"
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

  const anyTags = tags.length > 0

  return (
    <div className={styles["filter-bar"]}>
      {anyTags && (
        <h4
          className={classNames(styles.counter, {
            [styles["counter--featured"]]: projects.length === 0,
          })}>
          Projects left: ( {projects.length} )
        </h4>
      )}

      <ul className={styles.tags}>
        {tags.map((value) => (
          <li key={value}>
            <FilterTag
              value={value}
              onDelete={({ value }) => handleOnTechnologyDelete(value)}
            />
          </li>
        ))}
      </ul>

      {anyTags && (
        <div>
          <ActionButton onClick={handleOnTechnologiesClear}>
            <CrossIcon />
          </ActionButton>
        </div>
      )}
    </div>
  )
}
