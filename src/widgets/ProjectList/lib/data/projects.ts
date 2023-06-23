import ecommerceProductPageDemo from "../assets/e-commerce product page demo.gif"
import interactiveCommentSectionDemo from "../assets/interactive comment-section demo.gif"
import internetStoreDemo from "../assets/internet-store fullstack application demo.gif"
import multiStepFormDemo from "../assets/multi-step form demo.gif"
import notificationPageMobileDemo from "../assets/notification page mobile demo.gif"
import recipeManagementAppDemo from "../assets/recipe-management app demo.gif"
import { TDemo, TProjects } from "../types"

export const PROJECTS: TProjects = [
  {
    title: "E-commerce product page",
    description:
      "The product page, where users can add an item to the cart, delete an item from the cart, view the cart and scroll through gallery (+ fullscreen version) of pictures.",

    links: {
      code: "https://github.com/RudVlad473/e-commerce-product-page",
      deployment: "https://e-commerce-product-page-pink.vercel.app/",
    },

    demo: {
      type: TDemo.DESKTOP,
      url: ecommerceProductPageDemo,
    },

    technologies: ["React", "Redux Toolkit", "CSS/SCSS", "Typescript", "Javascript"],
  },
  {
    title: "Recipe-management app",
    description:
      "A recipe-management app page, where user can view general recipes, filter for recipes (search by name and filter by cooking time) and authorize. If authorized, user is able to add a recipe to 'favorites' so it can be viewed in separate list.",
    links: {
      code: "https://github.com/RudVlad473/recipe-management-app",
      deployment: "https://recipe-management-app-six.vercel.app/",
    },

    demo: {
      type: TDemo.DESKTOP,
      url: recipeManagementAppDemo,
    },

    technologies: ["React", "Redux Toolkit", "CSS/SCSS", "Typescript", "Javascript"],
  },
  {
    title: "Github issue kanban-board",
    description:
      "The github issues kanban-like board, where user can type in name of a repository via search bar and so load issues for that repository. Then, user can drag & drop issues between the columns, that represent the status of the issue and that info will be saved in the local storage.",
    links: {
      code: "https://github.com/RudVlad473/github-issue-kanban-board",
      deployment: "https://github-issue-kanban-board.vercel.app/",
    },

    technologies: ["React", "Redux Toolkit", "CSS/SCSS", "Typescript", "Javascript"],
  },
  {
    title: "Interactive comment section",
    description:
      "The comment section, where user can observe comments, left by them or/and other users, add comments & delete and edit their own comments. Also, user can leave a 'like' or 'dislike' and it is accounted correspondingly.",
    links: {
      code: "https://github.com/RudVlad473/interactive-comment-section-project",
      deployment: "https://interactive-comment-section-project.vercel.app/",
    },
    demo: {
      url: interactiveCommentSectionDemo,
      type: TDemo.DESKTOP,
    },
    technologies: ["React", "Redux Toolkit", "CSS/SCSS", "Typescript", "Javascript"],
  },
  {
    title: "Notification page",
    description:
      "The page, where user can observe their notifications, where newest ones are displayed on the top of the page. Also, user can mark their notifications as read.",
    links: {
      code: "https://github.com/RudVlad473/notification-page",
      deployment: "https://notification-page-omega.vercel.app/",
    },
    demo: {
      url: notificationPageMobileDemo,
      type: TDemo.MOBILE,
    },
    technologies: ["React", "Redux Toolkit", "CSS/SCSS", "Typescript", "NextJS", "Javascript"],
  },
  {
    title: "Multi-step form",
    description:
      "A multi-step form, where user can input their credentials, select among various types of controlls (plan card, addon check-item) and, finally, view the resulting sum of their choices on the final page.",
    links: {
      code: "https://github.com/RudVlad473/multi-step-form-vite-project",
      deployment: "https://multi-step-form-vite-project.vercel.app/",
    },
    demo: {
      url: multiStepFormDemo,
      type: TDemo.DESKTOP,
    },
    technologies: ["React", "Redux Toolkit", "CSS/SCSS", "Typescript", "Javascript"],
  },
  {
    title: "Internet store fullstack application",
    description:
      "Full stack application built using REST API architecture and TDD approach. It leverages modular approach of NestJS framework and feature-sliced design on the client side (React).",
    links: {
      code: "https://github.com/RudVlad473/internet-store-client-application",
      deployment: "",
    },
    demo: {
      url: internetStoreDemo,
      type: TDemo.DESKTOP,
    },
    technologies: [
      "React",
      "Redux Toolkit",
      "CSS/SCSS",
      "Typescript",
      "NestJS",
      "MongoDB",
      "Javascript",
    ],
  },
]
