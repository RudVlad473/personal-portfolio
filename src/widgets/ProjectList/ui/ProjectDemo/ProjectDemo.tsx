import { Demo } from "../../../../features/Demo/ui"
import { useBooleanState, useOuterClick } from "../../../../shared/lib/hooks"
import { useDarkBackgroundContext } from "../../../../shared/lib/hooks/useDarkBackgroundContext"
import { Link } from "../../../../shared/ui/Link"
import { LinkGroup } from "../../../../shared/ui/LinkGroup"
import { useScrollWithThreshold } from "../../../Header/lib/hooks"
import { useProjectDemo } from "../../lib/hooks"
import { TProject } from "../../lib/types"
import { FullScreenIcon } from "../icons/FullScreenIcon"
import styles from "./ProjectDemo.module.scss"
import classNames from "classnames"
import { motion } from "framer-motion"
import { FC, memo, useCallback, useEffect, useRef } from "react"

type ProjectDemoProps = Required<Pick<TProject, "demo" | "links">>

export const ProjectDemo: FC<ProjectDemoProps> = memo(({ demo, links }) => {
  const [isDemoActive, { toggle: toggleDemo }] = useBooleanState(false)
  const { toggleBg } = useDarkBackgroundContext()

  const containerRef = useRef<HTMLDivElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)
  const { x, y, scale } = useProjectDemo(demoRef)

  const handleToggleFullscreen = useCallback(() => {
    toggleDemo()
    toggleBg()
  }, [toggleBg, toggleDemo])

  const handleRemoveFullscreen = useCallback(() => {
    console.log('removing');
    

    if (!isDemoActive) {
      return
    }

    toggleDemo(false)
    toggleBg(false)
  }, [isDemoActive, toggleBg, toggleDemo])

  useOuterClick(containerRef, handleRemoveFullscreen)

  useScrollWithThreshold(handleRemoveFullscreen)

  return (
    <motion.div
      ref={containerRef}
      className={classNames(styles.container, {
        [styles["container--active"]]: isDemoActive,
      })}
      initial={{ transform: "translateX(0px) scale(1)" }}
      animate={{
        transform: isDemoActive ? `translateX(${-x}px) scale(${1.75})` : "translateX(0px) scale(1)",
      }}
      transition={{
        duration: 1,
      }}>
      <div className={styles["link-group"]}>
        <LinkGroup links={[{ icon: () => <FullScreenIcon />, onClick: handleToggleFullscreen }]} />
      </div>

      <div className={styles.demo}>
        {links.deployment ? (
          <Link
            url={links.deployment}
            toNewPage
            isPlain>
            <Demo
              {...demo}
              isDisabled={false}
              ref={demoRef}
            />
          </Link>
        ) : (
          <Demo
            {...demo}
            isDisabled={false}
            ref={demoRef}
          />
        )}
      </div>
    </motion.div>
  )
})
