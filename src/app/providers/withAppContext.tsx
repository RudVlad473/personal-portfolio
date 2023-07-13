import { ProjectFiltersContextProvider, projectFiltersInitValue } from "../../shared/lib/context"
import { ProjectsContextProvider } from "../../shared/lib/context/projects-context"
import { TProjectFilters } from "../../shared/lib/types"
import { useFilteredProjects } from "../../widgets/ProjectList/lib/hooks"
import { useState } from "react"

export const withAppContext = (component: () => React.ReactNode) => () => {
  const [filters, setFilters] = useState<TProjectFilters>(projectFiltersInitValue.filters)

  const { projects } = useFilteredProjects(filters)

  return (
    <ProjectFiltersContextProvider value={{ filters, setFilters }}>
      <ProjectsContextProvider value={{ projects }}>{component()}</ProjectsContextProvider>
    </ProjectFiltersContextProvider>
  )
}
