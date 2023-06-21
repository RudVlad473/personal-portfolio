import classNames from "classnames"
import { FC, Fragment } from "react"
import { useSnakeScales } from "../../lib/hooks"
import { TScale } from "../../lib/types"
import { Scale } from "../Scale"
import styles from "./SnakeScale.module.scss"

type SnakeScaleProps = {
  scales: TScale[]
  onScaleClick: (scale: TScale) => void
  selectedScales: TScale['title'][]
}

//"Snake scale" is a hexagon-like group of shapes
export const SnakeScale: FC<SnakeScaleProps> = ({ scales, onScaleClick, selectedScales }) => {
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
          <Fragment key={scale.id}>
            <li className={styles["empty-scale"]} />

            <li
              key={scale.title}
              className={classNames(styles["scale"], {
                [styles["scale--selected"]]: selectedScales.includes(scale.title),
              })}
              style={{ translate: `${translation}%` }}
              onClick={() => onScaleClick(scale)}>
              <Scale {...scale} />
            </li>
            {index === scales.length - 1 && <li className={styles["empty-scale"]} />}
          </Fragment>
        )
      })}
    </ul>
  )
}
