import { TScales } from "../../../features/SnakeScale/lib/types"
import jsLogo from "../lib/assets/js-logo.svg"
import nestjsLogo from "../lib/assets/nestjs-logo.svg"
import nextjsLogo from "../lib/assets/nextjs-logo.svg"
import reactLogo from "../lib/assets/react-logo.svg"
import reduxLogo from "../lib/assets/redux-logo.svg"
import scssLogo from "../lib/assets/scss-logo.svg"
import tsLogo from "../lib/assets/ts-logo.svg"

export const SKILL_SCALES: TScales = [
  {
    title: "Typescript",
    description: "",
    image: tsLogo,
  },
  {
    title: "Javascript",
    description: "",
    image: jsLogo,
  },
  {
    title: "CSS/SCSS",
    description: "",
    image: scssLogo,
  },
  {
    title: "React",
    description: "",
    image: reactLogo,
  },
  {
    title: "Redux Toolkit",
    description: "",
    image: reduxLogo,
  },
  {
    title: "NextJS",
    description: "",
    image: nextjsLogo,
  },
  {
    title: "NestJS",
    description: "",
    image: nestjsLogo,
  },
].map((skill, index) => ({
  ...skill,
  id: `${index}`,
}))
