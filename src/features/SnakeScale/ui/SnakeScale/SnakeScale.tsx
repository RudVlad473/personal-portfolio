import { TScales } from "../../lib/types"
import { Scale } from "../Scale"
import styles from "./SnakeScale.module.scss"
import { FC } from "react"

type SnakeScaleProps = {
  scales: TScales
}

export const SnakeScale: FC<SnakeScaleProps> = ({ scales }) => {
  return (
    <ul className={styles["snake-scale"]}>
      {scales.map((scale) => (
        <li
          key={scale.title}
          className={styles["scale"]}>
          <Scale {...scale} />
        </li>
      ))}
    </ul>
  )
}
