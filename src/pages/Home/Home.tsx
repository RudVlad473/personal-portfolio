import { Footer } from "../../widgets/Footer/ui"
import { Hero } from "../../widgets/Hero/ui"
import { ProjectList } from "../../widgets/ProjectList/ui"
import styles from "./Home.module.scss"
import { FC } from "react"

export const Home: FC = () => {
  return (
    <section className={styles.home}>
      <div>
        <Hero />
      </div>

      <article>
        <ProjectList />
      </article>
    </section>
  )
}
