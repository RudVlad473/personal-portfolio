import { ActionButton } from "../../../../../../shared/ui/ActionButton"
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
        <li key={url}>
          <Link
            url={url}
            isPlain
            toNewPage>
            <ActionButton>{icon()}</ActionButton>
          </Link>
        </li>
      ))}
    </ul>
  )
}
