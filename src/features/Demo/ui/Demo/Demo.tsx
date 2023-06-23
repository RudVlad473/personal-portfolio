import { useOuterClick } from "../../../../shared/lib/hooks"
import { DarkBackground } from "../../../../shared/ui/DarkBackground"
import { Portal } from "../../../../shared/ui/Portal"
import { TDemo, TProject } from "../../../../widgets/ProjectList/lib/types"
import { demoViewTimeoutMs } from "../../consts"
import { useDemoView } from "../../lib/hooks"
import styles from "./Demo.module.scss"
import classNames from "classnames"
import { FC, useRef, useState } from "react"

type DemoProps = NonNullable<TProject["demo"]>

export const Demo: FC<DemoProps> = ({ type, url }) => {
  const demoRef = useRef<HTMLDivElement>(null)

  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const { demoTransformation, handleDisableView, handleEnableView } = useDemoView(isDisabled)

  useOuterClick(demoRef, () => {
    setIsDisabled(true)

    handleDisableView()

    setTimeout(() => setIsDisabled(false), demoViewTimeoutMs)
  })

  return (
    <>
      <div
        ref={demoRef}
        className={styles.wrapper}
        onMouseEnter={handleEnableView}
        // onMouseLeave={handleOnMouseLeave}
        style={{
          transform: `
        translate(${demoTransformation.x}px) 
        scale(${demoTransformation.scale || 1})
        `,
        }}>
        <img
          className={classNames(
            styles.demo,
            type === TDemo.DESKTOP ? styles["demo--desktop"] : styles["demo--mobile"],
            {
              [styles["demo--disabled"]]: isDisabled,
            }
          )}
          src={url}
          alt={type === TDemo.DESKTOP ? "Desktop demo" : "Mobile demo"}
        />
      </div>

      <Portal>
        <DarkBackground isActive={demoTransformation.x !== 0 && demoTransformation.y !== 0} />
      </Portal>
    </>
  )
}
