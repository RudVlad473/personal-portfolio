import { bottomScale, bottomWidth } from "../../consts"
import { Bottom } from "../patterns/Bottom"
import styles from "./BottomCover.module.scss"
import classNames from "classnames"
import { FC } from "react"

type BottomCoverProps = {
  pageWidth: number
}

export const BottomCover: FC<BottomCoverProps> = ({ pageWidth }) => {
  const patternsToFill = Math.ceil(pageWidth / (bottomWidth * bottomScale))

  const bottomPatterns = new Array(patternsToFill).fill(Bottom)

  return (
    <ul className={styles["bottom"]}>
      {bottomPatterns.map((BottomPattern, index) => {
        return (
          <li
            key={index}
            className={classNames(styles["bottom-pattern"], {
              [styles["bottom-pattern--turned"]]: index !== 0,
            })}>
            <BottomPattern />
          </li>
        )
      })}
    </ul>
  )
}
