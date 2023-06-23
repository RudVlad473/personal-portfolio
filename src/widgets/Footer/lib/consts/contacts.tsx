import { GithubIcon } from "../../ui/icons/GithubIcon"
import { GmailIcon } from "../../ui/icons/GmailIcon"
import { LinkedInIcon } from "../../ui/icons/LinkedInIcon"
import { PhoneIcon } from "../../ui/icons/PhoneIcon"
import { ResumeIcon } from "../../ui/icons/ResumeIcon"
import { TelegramIcon } from "../../ui/icons/TelegramIcon"
import { TContacts } from "../types"

export const CONTACTS: TContacts = [
  {
    logo: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/vladimir-rudenko/",
  },
  {
    logo: <GmailIcon />,
    link: "mailto:rudenkovladimir2003@gmail.com",
  },
  {
    logo: <TelegramIcon />,
    link: "https://t.me/vladbogolubov",
  },
  {
    logo: <GithubIcon />,
    link: "https://github.com/RudVlad473",
  },
  {
    logo: <PhoneIcon />,
    link: "tel:+380968474418",
  },
  {
    logo: <ResumeIcon />,
    link: "https://drive.google.com/file/d/1I8OxEmtchfUjusL5cvRjkN5pLDuv8UYk/view?usp=sharing",
  },
]
