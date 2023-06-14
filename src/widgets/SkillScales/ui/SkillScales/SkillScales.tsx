import { FilterBar } from "../../../../features/FilterBar/ui"
import { SnakeScale } from "../../../../features/SnakeScale/ui"
import { SKILL_SCALES } from "../../consts"
import styles from "./SkillScales.module.scss"
import { FC } from "react"

export const SkillScales: FC = () => {
  function handleOnFilterChange(payload: string[]) {
    console.log(`on filter change ${payload}`)
  }

  return (
    <div>
      <div className={styles["skill-scales"]}>
        <SnakeScale scales={SKILL_SCALES} />
      </div>

      <footer>
        <FilterBar
          onChange={handleOnFilterChange}
          tags={[]}
        />
      </footer>
    </div>
  )
}
