import styles from "./ScrollPart.module.scss"
import { FC, PropsWithChildren } from "react"

type ScrollPartProps = PropsWithChildren

export const ScrollPart: FC<ScrollPartProps> = ({ children }) => {
  return <>{children}</>
}
