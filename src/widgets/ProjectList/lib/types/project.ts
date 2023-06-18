export enum TDemo {
  MOBILE = "V",
  DESKTOP = "H",
}

export type TProject = {
  title: string
  description: string
  links: {
    code: string
    deployment: string
  }
  demo?: {
    url: string
    type: TDemo
  }
  technologies: string[]
}

export type TProjects = TProject[]
