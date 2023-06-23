import { Typing } from "../../../../features/Typing/ui"
import { SkillScales } from "../../../SkillScales/ui"
import styles from "./Hero.module.scss"
import { FC } from "react"
import { ErrorBoundary } from "react-error-boundary"

export const Hero: FC = () => {
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
