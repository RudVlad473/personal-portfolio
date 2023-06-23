import { TScales } from "../../../../features/SnakeScale/lib/types"
import { useProjectFiltersContext } from "../../../../shared/lib/hooks"
import { SKILL_SCALES } from "../../consts"
import { sortStringsByPriorityString } from "../utils"
import { useMemo } from "react"

export function useSortedScales() {
  const filtersContext = useProjectFiltersContext()

  const technologies = filtersContext?.filters?.technologies
  const setFilters = filtersContext?.setFilters

  const sortedSkills: TScales = useMemo(() => {
    if (!technologies) {
      return SKILL_SCALES
    }

    const sorted = sortStringsByPriorityString(
      SKILL_SCALES.map(({ title }) => title),
      technologies
    )

    return sorted.map((skill) => SKILL_SCALES.find(({ title }) => skill === title)!)
  }, [technologies])

  return {
    sortedSkills,
    technologiesFilter: technologies,
    setFilters,
  }
}
