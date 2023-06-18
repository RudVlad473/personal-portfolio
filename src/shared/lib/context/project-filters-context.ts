import { TProjectFilters } from "../types"
import { createContext } from "react"

export type TProjectFiltersContext =
  | {
      filters: TProjectFilters | undefined
      setFilters: React.Dispatch<React.SetStateAction<TProjectFilters | undefined>>
    }
  | undefined

export const ProjectFiltersContext = createContext<TProjectFiltersContext>(undefined)

export const ProjectFiltersContextProvider = ProjectFiltersContext.Provider
