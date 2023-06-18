import scaleVar from "../stylesheets/scale.module.scss"
import { TScale, TScales } from "../types"
import { iterativelySplitArrayByGroups } from "../utils/iterativelySplitArrayByGroups"
import { useCallback } from "react"

type TCoords = {
  rowIndex: number
  colIndex: number
}

type TMatrixScale = TScale & TCoords

type TScalePredicate<T = void> = (value: TMatrixScale) => T

export function useSnakeScales(scales: TScales) {
  const pivot = Math.round(scales.length / 2)

  const colCount = pivot + 1
  const rowCount = pivot - 1

  const matrixColCount = rowCount
  const maxrixRowCount = rowCount

  const scalesMatrix: TScales[] = iterativelySplitArrayByGroups(scales, [
    colCount - rowCount,
    rowCount,
  ])

  const forEachScale = useCallback(
    (callback: TScalePredicate) => {
      scalesMatrix.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          callback({
            ...value,
            colIndex,
            rowIndex,
          })
        })
      })
    },
    [scalesMatrix]
  )

  const findScaleById = useCallback(
    ({ id }: TScale) => {
      let resultScale: TMatrixScale | undefined

      forEachScale((value) => {
        if (value.id === id) {
          resultScale = value
        }
      })

      return resultScale
    },
    [forEachScale]
  )

  const pivotCoords = findScaleById(scales[pivot - 1])

  const getCoordsByScale = useCallback(
    ({ id }: TScale): TCoords | undefined => {
      let coords: TCoords | undefined

      forEachScale(({ id: scaleId, colIndex, rowIndex }) => {
        if (id === scaleId) {
          coords = {
            colIndex,
            rowIndex,
          }
        }
      })

      return coords
    },
    [forEachScale]
  )

  const calculateScaleTranslation = useCallback(
    (scale: TScale): number => {
      const scaleCoords = getCoordsByScale(scale)

      if (!pivotCoords || !scaleCoords) {
        throw new Error("Pivot wasn't found")
      }

      const isOnRightSide = scaleCoords.colIndex >= (matrixColCount - 1) / 2

      const colDifference =
        Math.abs(pivotCoords.colIndex - scaleCoords.colIndex) * (isOnRightSide ? -1 : 1)

      const isNeighboorCell = Math.abs(colDifference) === 1 || Math.abs(colDifference) === 0

      const isOnSameRow = scaleCoords.rowIndex === pivotCoords.rowIndex

      let translation = 0

      if (isNeighboorCell && !isOnSameRow) {
        translation =
          (colDifference - (isOnRightSide ? 1 : 0)) * (50 - parseInt(scaleVar.cornerCut) / 2)
      } else {
        translation = colDifference * (100 - parseInt(scaleVar.cornerCut))
      }

      return translation
    },
    [getCoordsByScale, matrixColCount, pivotCoords]
  )

  return {
    scalesMatrix,
    colCount,
    rowCount,
    calculateScaleTranslation,
  } as const
}
