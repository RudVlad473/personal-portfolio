import { useContext } from "react"
import { ProjectsContext } from "../context/projects-context"

export function useProjectsContext() {
  const projectsContext = useContext(ProjectsContext)

  return projectsContext
}
