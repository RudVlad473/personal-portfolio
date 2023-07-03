import { useProjectsContext } from "../../../../shared/lib/hooks"
import { TSeparatorTypes } from "../../../../shared/lib/types/separator"
import { Separator } from "../../../../shared/ui/Separator"
import { NoProjects } from "../NoProjects"
import { Project } from "../Project"
import styles from "./ProjectList.module.scss"
import { FC } from "react"

export const ProjectList: FC = () => {
  const { projects } = useProjectsContext()

  if (!projects.length) {
    return <NoProjects />
  }

  return (
    <ul className={styles["project-list"]}>
      {projects.map((project, index) => (
        <li
          key={project.title}
          className={styles["project-section"]}>
          <div className={styles.project}>
            <Project {...project} />

            {index !== projects.length - 1 && <Separator type={TSeparatorTypes.DOTTED} />}
          </div>
        </li>
      ))}
    </ul>
  )
}
