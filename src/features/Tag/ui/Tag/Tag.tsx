import styles from "./Tag.module.scss"
import { FC } from "react"

type TagProps = {
  label: string
  link?: string
}

export const Tag: FC<TagProps> = ({ label, link }) => {
  return (
    <div className={styles.tag}>
      {link ? (
        <a
          href={link}
          target="_blank">
          {label}
        </a>
      ) : (
        <span>{label}</span>
      )}
    </div>
  )
}
