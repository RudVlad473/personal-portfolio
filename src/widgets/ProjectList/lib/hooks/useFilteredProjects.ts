import { TProjectFilters } from "../../../../shared/lib/types"
import { PROJECTS } from "../data/projects"
import { TProject, TProjects } from "../types"
import { useMemo } from "react"

const projectFilters: Partial<
  Record<keyof TProject, (project: TProject, payload: any) => boolean>
> = {
  technologies: (project, technologies: TProject["technologies"]) => {
    return technologies.every((technology) => project.technologies.includes(technology))
  },
}

export function useFilteredProjects(filters: TProjectFilters): {
  projects: TProjects
} {
  const projects: TProjects = useMemo(() => {
    let filteredProjects: TProjects = PROJECTS

    if (!filters) {
      return filteredProjects
    }

    const activeFilters = Object.keys(filters)

    for (const filter of activeFilters) {
      const filterKey = filter as keyof TProject

      const filterCallback = projectFilters[filterKey]
      const filterPayload = filters[filterKey]

      if (!filterCallback || !filterPayload) {
        continue
      }

      filteredProjects = filteredProjects.filter((project) => {
        return filterCallback(project, filterPayload)
      })
    }

    return filteredProjects
  }, [filters])

  return {
    projects,
  }
}
