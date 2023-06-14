import { Link } from "../../../../../../shared/ui/Link"
import styles from "./ProjectLinks.module.scss"
import { FC } from "react"

type ProjectLinksProps = {
  links: { url: string; icon: () => React.ReactNode }[]
}

export const ProjectLinks: FC<ProjectLinksProps> = ({ links }) => {
  return (
    <ul className={styles["link-group"]}>
      {links.map(({ icon, url }) => (
        <li
          className={styles.link}
          key={url}>
          <Link
            url={url}
            isPlain
            toNewPage>
            {icon()}
          </Link>
        </li>
      ))}
    </ul>
  )
}
