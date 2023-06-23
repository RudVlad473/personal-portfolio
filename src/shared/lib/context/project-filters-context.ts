/* eslint-disable @typescript-eslint/no-empty-function */
import { TProjectFilters } from "../types"
import { createContext } from "react"

export type TProjectFiltersContext = {
  filters: TProjectFilters
  setFilters: React.Dispatch<React.SetStateAction<TProjectFilters>>
}

export const projectFiltersInitValue: TProjectFiltersContext = {
  filters: {},
  setFilters: () => {},
}

export const ProjectFiltersContext = createContext<TProjectFiltersContext>(projectFiltersInitValue)

export const ProjectFiltersContextProvider = ProjectFiltersContext.Provider
