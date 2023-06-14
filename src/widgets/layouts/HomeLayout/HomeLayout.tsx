import { Footer } from "../../Footer/ui"
import { Header } from "../../Header/ui"
import styles from "./HomeLayout.module.scss"
import { FC, PropsWithChildren } from "react"

type HomeLayoutProps = PropsWithChildren

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <main className={styles["home-layout"]}>
      <div className={styles.heading}>
        <Header />
      </div>

      <div className={styles.contents}>{children}</div>

      <div className={styles.footing}>
        <Footer />
      </div>
    </main>
  )
}
