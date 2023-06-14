import styles from "./Typing.module.scss"
import { FC, useEffect } from "react"
import Typed from "typed.js"

export const Typing: FC = () => {
  const articleId = "ARTICLE_WITH_TYPING"

  useEffect(() => {
    const typed = new Typed(articleId, {
      strings: [
        "Hi, i'm <i>Vladimir</i>",
        "A motivated <i>frontend engineer</i> from <i>Kharkiv, Ukraine<i/>",
      ],
      typeSpeed: 50,
      showCursor: true,
      backDelay: 50,
    })

    return () => typed.destroy()
  }, [articleId])

  return (
    <article className={styles.typing}>
      <span id={articleId} />
    </article>
  )
}
