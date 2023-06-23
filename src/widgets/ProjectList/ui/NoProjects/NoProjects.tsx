import styles from "./NoProjects.module.scss"
import { FC } from "react"

export const NoProjects: FC = () => {
  return <div className={styles.noprojects}>No project matches that set of filters</div>
}
