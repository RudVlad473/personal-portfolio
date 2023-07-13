/* eslint-disable @typescript-eslint/no-empty-function */
import { TSeparatorTypes } from "../../../../shared/lib/types/separator"
import { Link } from "../../../../shared/ui/Link"
import { LinkGroup } from "../../../../shared/ui/LinkGroup"
import { Separator } from "../../../../shared/ui/Separator"
import { useAnimation } from "../../lib/hooks"
import { TPosition, TProject } from "../../lib/types"
import { ProjectDemo } from "../ProjectDemo"
import { CodeIcon } from "../icons/CodeIcon"
import styles from "./Project.module.scss"
import { motion, useInView } from "framer-motion"
import { memo, useRef } from "react"

type ProjectProps = TProject

export const Project = memo<ProjectProps>(({ title, description, demo, links }) => {
  const projectRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(projectRef, {
    once: true,
  })
  const { getAnimationProps } = useAnimation(isInView)

  return (
    <section
      ref={projectRef}
      className={styles.project}>
      <header className={styles.heading}>
        <motion.h1
          {...getAnimationProps(TPosition.FROM_LEFT)}
          className={styles.title}>
          <Link
            url={links.deployment}
            onClick={!links.deployment ? () => {} : undefined}
            toNewPage>
            {title}
          </Link>
        </motion.h1>

        <motion.nav
          className={styles.links}
          {...getAnimationProps(TPosition.FROM_RIGHT)}>
          <LinkGroup
            links={[
              {
                icon: () => <CodeIcon />,
                url: links.code,
              },
            ]}
          />
        </motion.nav>
      </header>

      <div className={styles.contents}>
        {description.length > 0 && (
          <motion.div
            className={styles.article}
            {...getAnimationProps(TPosition.FROM_LEFT)}>
            <div className={styles.separator}>
              <Separator type={TSeparatorTypes.LINED} />
            </div>

            <article className={styles.description}>{description}</article>
          </motion.div>
        )}

        {demo && (
          <motion.aside
            className={styles.demo}
            {...getAnimationProps(TPosition.FROM_RIGHT)}>
            <ProjectDemo {...{ demo, links }} />
          </motion.aside>
        )}
      </div>
    </section>
  )
})
