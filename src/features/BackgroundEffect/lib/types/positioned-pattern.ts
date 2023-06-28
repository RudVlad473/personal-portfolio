import { TPattern } from "."

export enum TPosition {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
}

export type TPositionedPattern = {
  rotated: boolean
  position: TPosition
} & Pick<TPattern, "id">

export type TPositionedPatterns = TPositionedPattern[]
