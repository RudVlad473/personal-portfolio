/* eslint-disable @typescript-eslint/no-empty-function */
import { TProjects } from "../../../widgets/ProjectList/lib/types"
import { createContext } from "react"

export type TProjectsContext = {
  projects: TProjects
}

export const projectsContextInitValue: TProjectsContext = {
  projects: [],
}

export const ProjectsContext = createContext<TProjectsContext>(projectsContextInitValue)

export const ProjectsContextProvider = ProjectsContext.Provider
