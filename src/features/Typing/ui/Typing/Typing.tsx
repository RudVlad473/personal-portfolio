import styles from "./Typing.module.scss"
import { FC, useEffect, useRef } from "react"
import Typed from "typed.js"

export const Typing: FC = () => {
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const typed = new Typed(articleRef.current, {
      strings: [
        "Hello^500",
        "Hi, i'm <b>Vladimir</b>^500 <br/> A motivated <u>frontend engineer<u/> from <u>Kharkiv<u/>, <u>Ukraine<u/>",
      ],
      typeSpeed: 50,
      showCursor: true,
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
