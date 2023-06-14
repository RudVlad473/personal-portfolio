import { Link } from "../../../../../../shared/ui/Link"
import { CodeIcon } from "../../../../CodeIcon"
import { TProject } from "../../../../lib/types"
import { Demo } from "../Demo"
import { ProjectLinks } from "../ProjectLinks"
import styles from "./Project.module.scss"
import { FC } from "react"

type ProjectProps = TProject

export const Project: FC<ProjectProps> = ({ title, description, demo, links }) => {
  return (
    <section className={styles.project}>
      <h1 className={styles.heading}>
        <Link
          url={links.deployment}
          toNewPage>
          {title}
        </Link>
      </h1>

      <nav className={styles.links}>
        <ProjectLinks
          links={[
            {
              icon: () => <CodeIcon />,
              url: links.code,
            },
          ]}
        />
      </nav>

      <hr className={styles.separator} />

      <article className={styles.description}>{description}</article>

      {demo && (
        <aside className={styles.demo}>
          <Demo {...demo} />
        </aside>
      )}
    </section>
  )
}
