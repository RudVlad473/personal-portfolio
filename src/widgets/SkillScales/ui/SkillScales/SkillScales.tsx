import { FilterBar } from "../../../../features/FilterBar/ui"
import { SnakeScale } from "../../../../features/SnakeScale/ui"
import { useProjectFiltersContext } from "../../../../shared/lib/hooks"
import { SKILL_SCALES } from "../../consts"
import styles from "./SkillScales.module.scss"
import { FC } from "react"

export const SkillScales: FC = () => {
  const filtersContext = useProjectFiltersContext()

  const technologies = filtersContext?.filters?.technologies
  const setFilters = filtersContext?.setFilters

  function handleOnFilterChange(payload: string[]) {
    console.log(`on filter change ${payload}`)
  }

  return (
    <div>
      <div className={styles["skill-scales"]}>
        <SnakeScale
          scales={SKILL_SCALES}
          onScaleClick={(scale) => {
            const newTechnologies = Array.from(new Set([...(technologies || []), scale.title]))

            setFilters?.((filters) => {
              return {
                ...filters,
                technologies: newTechnologies,
              }
            })
          }}
        />
      </div>

      <footer>
        <FilterBar
          onChange={handleOnFilterChange}
          tags={
            technologies?.map((technology) => ({
              value: technology,
            })) || []
          }
        />
      </footer>
    </div>
  )
}
