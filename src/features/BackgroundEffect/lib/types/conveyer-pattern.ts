import { TPattern } from "."

export type ConveyerPatternEntity = Pick<TPattern, "id"> & {
  translationCount: number
}

export type ConveyerPatternEntities = ConveyerPatternEntity[]
