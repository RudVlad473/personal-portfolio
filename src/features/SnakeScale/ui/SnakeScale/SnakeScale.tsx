import { FC } from "react"
import { useSnakeScales } from "../../lib/hooks"
import { TScale, TScales } from "../../lib/types"
import { Scale } from "../Scale"
import styles from "./SnakeScale.module.scss"

type SnakeScaleProps = {
  scales: TScales
  onScaleClick: (scale: TScale) => void
}

//"Snake scale" is a hexagon-like group of shapes
export const SnakeScale: FC<SnakeScaleProps> = ({ scales, onScaleClick }) => {
  const { colCount, rowCount, scalesMatrix, calculateScaleTranslation } = useSnakeScales(scales)

  return (
    <ul
      className={styles["snake-scale"]}
      style={{
        gridTemplateColumns: `repeat(${colCount}, 1fr)`,
        gridTemplateRows: `repeat(${rowCount}, 1fr)`,
      }}>
      {scalesMatrix.flat().map((scale, index) => {
        const translation = calculateScaleTranslation(scale)

        return (
          <>
            <li className={styles["empty-scale"]} />

            <li
              key={scale.title}
              className={styles["scale"]}
              style={{ translate: `${translation}%` }}
              onClick={() => onScaleClick(scale)}>
              <Scale {...scale} />
            </li>
            {index === scales.length - 1 && <li className={styles["empty-scale"]} />}
          </>
        )
      })}
    </ul>
  )
}
