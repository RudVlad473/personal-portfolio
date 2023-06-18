import { ProjectFiltersContext } from "../context"
import { useContext } from "react"

export function useProjectFiltersContext() {
  const projectFiltersContext = useContext(ProjectFiltersContext)

  return projectFiltersContext
}
