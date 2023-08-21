import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ironhack,
  threejs,
  strands,
  nordea,
  bootstrap,
  languagecombat,
  popcorn
} from "../assets/index.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack developer",
    icon: mobile,
  },
  {
    title: "Product Owner",
    icon: backend,
  },
  {
    title: "Business Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Product Owner associate",
    company_name: "Nordea bank (Denmark)",
    icon: nordea,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Aug 2022",
    points: [
      "Working in Scaled Agile Framework (SAFe) and becoming a confident user of product management software such as JIRA or Confluence",
      "Maintaining and prioritizing the product backlog and supporting the product management team with different analyses",
      "QA testing of the new releases, defining and maintaining new and existing test cases.",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Strands (Spain)",
    icon: strands,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Planning and defining product roadmap for a fast-growing fintech company",
      "Utilize Agile methodologies such as Scrum or Kanban to facilitate iterative development and adaptability to changing requirements",
      "Being a product owner in a scrum team, defining and prioritizing the product backlog",
      "Creating UX/UI designs for upcoming features",
    ],
  },
  {
    title: "Full Stack Web Developer Bootcamp",
    company_name: "Ironhack (Spain)",
    icon: ironhack,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Design and build robust full-stack web applications from end-to-end using JavaScript in the frontend and the backend",
      "Create database driven web applications using non-relational databases like MongoDB",
      "Understand how to integrate 3rd party services using APIs",
      "Write clean, modular and efficient code using Object-Oriented principles"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Language Combat",
    description:
      'The Language Combat is a browser multiplayer "sumo" game where the players finally can prove that their favorite programming language is the best and rules them all.',
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: languagecombat,
    source_code_link: "https://github.com/ArvidErik/language-combat",
  },
  {
    name: "PopcornMDB",
    description:
      "A responsive movie database built with Express and Handlebars where users can post, review and rate movies.",
    tags: [
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Handlebars",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: popcorn,
    source_code_link: "https://github.com/FullStackIronApp/Project2",
  },
];

export { services, technologies, experiences, testimonials, projects };
