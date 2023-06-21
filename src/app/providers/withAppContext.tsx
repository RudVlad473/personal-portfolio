import { ProjectFiltersContextProvider, projectFiltersInitValue } from "../../shared/lib/context"
import { TProjectFilters } from "../../shared/lib/types"
import { useState } from "react"

export const withAppContext = (component: () => React.ReactNode) => () => {
  const [filters, setFilters] = useState<TProjectFilters>(projectFiltersInitValue.filters)

  return (
    <ProjectFiltersContextProvider
      value={{
        filters,
        setFilters,
      }}>
      {component()}
    </ProjectFiltersContextProvider>
  )
}
