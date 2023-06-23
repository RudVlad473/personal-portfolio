import { Hero } from "../../widgets/Hero/ui"
import { ProjectList } from "../../widgets/ProjectList/ui"
import styles from "./Home.module.scss"
import { FC } from "react"

export const Home: FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <Hero />
      </div>

      <article className={styles.projects}>
        <ProjectList />
      </article>
    </section>
  )
}
