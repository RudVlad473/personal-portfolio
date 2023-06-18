import { FC } from "react"
import { useFilteredProjects } from "../../lib/hooks"
import { Project } from "../Project/ui"
import styles from "./ProjectList.module.scss"

export const ProjectList: FC = () => {
  const { projects } = useFilteredProjects()

  return (
    <ul className={styles["project-list"]}>
      {projects.map((project) => (
        <li
          key={project.title}
          className={styles.project}>
          <Project {...project} />
        </li>
      ))}
    </ul>
  )
}
