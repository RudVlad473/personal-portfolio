import { Typing } from "../../../../features/Typing/ui"
import { SkillScales } from "../../../SkillScales/ui"
import styles from "./Hero.module.scss"
import { motion, useInView } from "framer-motion"
import { FC, useRef } from "react"
import { ErrorBoundary } from "react-error-boundary"

export const Hero: FC = () => {
  const scalesRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(scalesRef, {
    amount: 0.75,
  })

  return (
    <>
      <ErrorBoundary fallback={<></>}>
        <h1 className={styles.typing}>
          <Typing />
        </h1>
      </ErrorBoundary>

      <motion.div
        initial={{
          scale: 1,
          opacity: 0.25,
        }}
        animate={{
          scale: isInView ? 1.05 : 1,
          opacity: +isInView,
        }}
        transition={{
          duration: 0.35,
        }}
        ref={scalesRef}
        className={styles["skill-scales"]}>
        <SkillScales />
      </motion.div>
    </>
  )
}
