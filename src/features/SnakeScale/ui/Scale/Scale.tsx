import { FC } from "react"
import { TScale } from "../../lib/types"
import styles from "./Scale.module.scss"

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
