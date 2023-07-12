/* eslint-disable @typescript-eslint/no-empty-function */
import { Demo } from "../../../../features/Demo/ui"
import { TSeparatorTypes } from "../../../../shared/lib/types/separator"
import { DarkBackground } from "../../../../shared/ui/DarkBackground"
import { Link } from "../../../../shared/ui/Link"
import { Portal } from "../../../../shared/ui/Portal"
import { Separator } from "../../../../shared/ui/Separator"
import { useAnimation, useProjectDemo } from "../../lib/hooks"
import { TPosition, TProject } from "../../lib/types"
import { CodeIcon } from "../CodeIcon"
import { ProjectLinks } from "../ProjectLinks"
import styles from "./Project.module.scss"
import { motion, useInView } from "framer-motion"
import { memo, useRef, useState } from "react"

type ProjectProps = TProject

export const Project = memo<ProjectProps>(({ title, description, demo, links }) => {
  const projectRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(projectRef, {
    once: true,
  })
  const { getAnimationProps } = useAnimation(isInView)

  const [isDemoDisabled, setIsDemoDisabled] = useState(false)
  const demoRef = useRef<HTMLDivElement>(null)
  const { x, y, scale } = useProjectDemo(demoRef)

  return (
    <>
      <section
        ref={projectRef}
        className={styles.project}>
        <header className={styles.heading}>
          <motion.h1 {...getAnimationProps(TPosition.FROM_LEFT)} className={styles.title}>
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
              ref={demoRef}
              className={styles.demo}
              {...getAnimationProps(TPosition.FROM_RIGHT)}
              initial={{
                transform: `translate(0px)`,
              }}
              // whileHover={{
              //   transform: `scale(${scale}) translate(${x / scale}px)`,
              // }}
              transition={{ duration: 1 }}>
              {links.deployment ? (
                <Link
                  url={links.deployment}
                  toNewPage
                  isPlain>
                  <Demo
                    {...demo}
                    isDisabled={isDemoDisabled}
                  />
                </Link>
              ) : (
                <Demo
                  {...demo}
                  isDisabled={isDemoDisabled}
                />
              )}
            </motion.aside>
          )}
        </div>
      </section>

      <Portal>
        <DarkBackground
          isActive={
            // !!(x && y && !isDemoDisabled)
            false
          }
        />
      </Portal>
    </>
  )
})
