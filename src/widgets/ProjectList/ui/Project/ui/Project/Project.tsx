import { Demo } from "../../../../../../features/Demo/ui"
import { TSeparatorTypes } from "../../../../../../shared/lib/types/separator"
import { Link } from "../../../../../../shared/ui/Link"
import { Separator } from "../../../../../../shared/ui/Separator"
import { TProject } from "../../../../lib/types"
import { CodeIcon } from "../../../CodeIcon"
import { ProjectLinks } from "../ProjectLinks"
import styles from "./Project.module.scss"
import { memo } from "react"

type ProjectProps = TProject

export const Project = memo<ProjectProps>(({ title, description, demo, links }) => {
  return (
    <section className={styles.project}>
      <header className={styles.heading}>
        <h1>
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
      </header>

      <div className={styles.contents}>
        {description.length > 0 && (
          <div className={styles.article}>
            <div className={styles.separator}>
              <Separator type={TSeparatorTypes.LINED} />
            </div>

            <article className={styles.description}>{description}</article>
          </div>
        )}

        {demo && (
          <aside className={styles.demo}>
            {links.deployment ? (
              <Link
                url={links.deployment}
                toNewPage
                isPlain>
                <Demo {...demo} />
              </Link>
            ) : (
              <Demo {...demo} />
            )}
          </aside>
        )}
      </div>
    </section>
  )
})
