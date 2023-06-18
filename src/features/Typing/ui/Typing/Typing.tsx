import styles from "./Typing.module.scss"
import { FC, useEffect, useRef } from "react"
import Typed from "typed.js"

export const Typing: FC = () => {
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const typed = new Typed(articleRef.current, {
      strings: [
        "Hi, i'm <b>Vladimir</b>^1000",
        "A motivated <b>frontend engineer</b> from <b>Kharkiv, Ukraine<b/>",
      ],
      typeSpeed: 100,
      showCursor: true,
      backDelay: 50,
      smartBackspace: false,
    })

    return () => typed.destroy()
  }, [articleRef])

  return (
    <article className={styles.typing}>
      <span ref={articleRef} />
    </article>
  )
}
