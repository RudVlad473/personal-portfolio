import { TDemo, TProject } from "../../../../lib/types"
import styles from "./Demo.module.scss"
import { FC } from "react"

type DemoProps = NonNullable<TProject["demo"]>

export const Demo: FC<DemoProps> = ({ url, type = TDemo.MOBILE }) => {
  return <>{type === TDemo.MOBILE ? <div>MOBILE DEMO</div> : <div>DESKTOP DEMO</div>}</>
}
