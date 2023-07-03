import { TScale } from "../../lib/types"
import styles from "./Scale.module.scss"
import { FC } from "react"

type ScaleProps = TScale

export const Scale: FC<ScaleProps> = ({ title, description, image }) => {
  return (
    <section
      className={styles.scale}
      style={{ backgroundImage: `url(${image})` }}>
      <h1 className={styles.heading}>{title}</h1>
      <article className={styles.description}>{description}</article>
    </section>
  )
}
