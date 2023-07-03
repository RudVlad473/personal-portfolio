import { Typing } from "../../../../features/Typing/ui"
import { SkillScales } from "../../../SkillScales/ui"
import styles from "./Hero.module.scss"
import { FC } from "react"
import { ErrorBoundary } from "react-error-boundary"

export const Hero: FC = () => {
  // const scalesRef = useRef<HTMLDivElement>(null)
  // const isInView = useInView(scalesRef, {
  //   amount: 0.75,
  // })

  return (
    <>
      <ErrorBoundary fallback={<></>}>
        <h1 className={styles.typing}>
          <Typing />
        </h1>
      </ErrorBoundary>

      <div className={styles["skill-scales"]}>
        <SkillScales />
      </div>
    </>
  )
}
