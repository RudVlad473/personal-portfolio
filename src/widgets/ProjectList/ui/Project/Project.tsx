/* eslint-disable @typescript-eslint/no-empty-function */
import { Demo } from "../../../../features/Demo/ui"
import { TSeparatorTypes } from "../../../../shared/lib/types/separator"
import { Link } from "../../../../shared/ui/Link"
import { Separator } from "../../../../shared/ui/Separator"
import { useAnimation } from "../../lib/hooks"
import { TPosition, TProject } from "../../lib/types"
import { CodeIcon } from "../CodeIcon"
import { ProjectLinks } from "../ProjectLinks"
import styles from "./Project.module.scss"
import { useInView, motion, AnimationProps } from "framer-motion"
import { memo, useCallback, useRef } from "react"

type ProjectProps = TProject

export const Project = memo<ProjectProps>(({ title, description, demo, links }) => {
  const projectRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(projectRef, { once: true })

  const { getAnimationProps } = useAnimation(isInView)

  return (
    <section
      ref={projectRef}
      className={styles.project}>
      <header className={styles.heading}>
        <motion.h1 {...getAnimationProps(TPosition.FROM_LEFT)}>
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
          <ProjectLinks
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
          </motion.aside>
        )}
      </div>
    </section>
  )
})
