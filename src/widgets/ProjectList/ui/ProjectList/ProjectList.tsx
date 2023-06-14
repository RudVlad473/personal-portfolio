import projectsJson from "../../lib/data/projects.json"
import { TProjects } from "../../lib/types"
import { Project } from "../Project/ui"
import styles from "./ProjectList.module.scss"
import { FC } from "react"

const projects = projectsJson as TProjects

export const ProjectList: FC = () => {
  return (
    <ul className={styles["project-list"]}>
      {projects.map((project) => (
        <li key={project.title} className={styles.project}>
          <Project {...project} />
        </li>
      ))}
    </ul>
  )
}
