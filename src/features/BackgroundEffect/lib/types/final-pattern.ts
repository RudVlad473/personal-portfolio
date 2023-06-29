import { ConveyerPatternEntity, TPositionedPattern } from "."

export type TFinalPattern = ConveyerPatternEntity & TPositionedPattern

export type TFinalPatterns = TFinalPattern[]
