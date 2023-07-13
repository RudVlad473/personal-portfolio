import { FilterBar } from "../../../../features/FilterBar/ui"
import { TScale } from "../../../../features/SnakeScale/lib/types"
import { SnakeScale } from "../../../../features/SnakeScale/ui"
import { useSortedScales } from "../../lib/hooks"
import styles from "./SkillScales.module.scss"
import { FC, useCallback, useRef } from "react"

export const SkillScales: FC = () => {
  const { sortedSkills, technologiesFilter = [], setFilters } = useSortedScales()

  const filterbarRef = useRef<HTMLDivElement>(null)

  const handleOnScaleSelect = useCallback(
    (scale: TScale) => {
      setFilters?.(({ technologies, ...filters }) => {
        const isAlreadySelected = !!technologies?.includes(scale.title)

        let newTechnologies: string[] = technologies || []

        if (isAlreadySelected) {
          //remove selected scale
          newTechnologies = newTechnologies.filter((technology) => technology !== scale.title)
        } else {
          //add new scale
          newTechnologies = Array.from(new Set([...newTechnologies, scale.title]))
        }

        return {
          ...filters,
          technologies: newTechnologies,
        }
      })
    },
    [setFilters]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles["skill-scales"]}>
        <SnakeScale
          selectedScales={technologiesFilter}
          scales={sortedSkills}
          onScaleClick={handleOnScaleSelect}
        />
      </div>

      <footer ref={filterbarRef}>
        <FilterBar />
      </footer>
    </div>
  )
}
