export const projects = [
  {
    name: "PREPLIST",
    type: "FULLSTACK",
    build: ["React", "Material UI", "Node", "Express", "MongoDB"],
    description:
      "My most ambitious project build. The idea was to digitalize our pen & paper 'preplist' we used at work. With extra features such as prep level recomendations.",
    extraContent:
      "I have build my own backend with Node/Express and deployed it on Heroku. Frontend was build with React and MaterialUI. Result was Fullstack CRUD SPA",
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
      "An interesting project that takes idea from popular streaming platform Twitch. Stream your screen and share it with others.",
    extraContent:
      "React application utilizing Redux and class based components with Google OAuth. Also using Flv.js to interact with OBS",
    links: {
      source: "https://github.com/NemesOliver/streams",
      live: "",
    },
  },
  {
    name: "PORTFOLIO",
    type: "FRONTEND",
    build: ["NextJS", "Styled-Components", "Framer-motion", "Custom Design"],
    description:
      "Personal portfolio to showcase my projects and skills i aquired so far. A fun project with custom design",
    extraContent:
      "My main focus was SEO and speed so i chose NextJS for this, along with Styled-components. Designed in Figma by myself.",
    links: {
      source: "https://github.com/NemesOliver/portfolio-nextJS",
      live: "",
    },
  },
];
