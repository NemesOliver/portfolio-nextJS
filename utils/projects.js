export const projects = [
  {
    name: "WINE CLOSET",
    type: "FRONTEND",
    build: [
      "NextJS",
      "Typescript",
      "Material UI",
      "Styled-Components",
      "Firebase",
    ],
    description:
      "Wine collection application, supporting multiple users, picture upload, adding and rating items...",
    extraContent: "*** PROJECT IN PROGRESS ***",
    links: {
      source: "https://github.com/NemesOliver/wine-rating-app",
      live: "https://wine-closet.vercel.app",
    },
  },
  {
    name: "PORTFOLIO",
    type: "FRONTEND",
    build: ["NextJS", "Styled-Components", "Framer-motion", "Custom Design"],
    description:
      "Personal portfolio to showcase my projects and skills I have acquired so far. A fun project with custom design.",
    extraContent:
      "My main focus was SEO and speed so, I chose NextJS for this, along with Styled-components. Designed in Figma by Myself.",
    links: {
      source: "https://github.com/NemesOliver/portfolio-nextJS",
      live: "",
    },
  },
  {
    name: "PREP LIST",
    type: "FULL STACK",
    build: ["React", "Material UI", "Node", "Express", "MongoDB"],
    description:
      "My most ambitious project built. The idea was to digitalize our pen & paper 'prep list' we used at work. With extra features such as prep level recommendations. ",
    extraContent:
      "I have built my own backend with Node/Express and deployed it on Heroku. Frontend was built with React and MaterialUI. Result was Full stack CRUD SPA.",
    links: {
      source: "https://github.com/NemesOliver/full-stack-prep-list-app",
      live: "https://prep-list-demo.herokuapp.com/",
    },
  },
  {
    name: "STREAMY",
    type: "FRONTEND",
    build: ["React", "Semantic UI", "GoogleOAuth", "Flv.js", "Json-server"],
    description:
      "An exciting ideology that is inspired by popular streaming platform Twitch. Stream your screen and share it with others.",
    extraContent:
      "React application utilizing Redux and class-based components with Google OAuth. Also using Flv.js to interact with OBS",
    links: {
      source: "https://github.com/NemesOliver/streams",
      live: "",
    },
  },
];
