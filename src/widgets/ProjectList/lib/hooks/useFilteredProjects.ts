import { useProjectFiltersContext } from "../../../../shared/lib/hooks"
import projectsJson from "../../lib/data/projects.json"
import { TProject, TProjects } from "../types"

const projects = projectsJson as TProjects

const projectFilters: Partial<
  Record<keyof TProject, (project: TProject, payload: any) => boolean>
> = {
  technologies: (project, technologies: TProject["technologies"]) => {
    return technologies.every((technology) => project.technologies.includes(technology))
  },
}

export function useFilteredProjects(): {
  projects: TProjects
} {
  const filtersContext = useProjectFiltersContext()

  const filters = filtersContext?.filters

  let filteredProjects: TProjects = projects

  if (!filters) {
    return { projects: filteredProjects }
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

  return {
    projects: filteredProjects,
  }
}
