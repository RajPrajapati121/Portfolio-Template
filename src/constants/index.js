import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  // komikult,
  ESS,
  apple,
  // leaderboard,
  // math,
  agri,
  ldrp,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  php,
  mysql,
  net,
  angular
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Fullstack Developer',
    icon: frontend,
  },
  {
    title: 'Python Developer',
    icon: backend,
  },
  {
    title: '3D Web Developer',
    icon: ux,
  },
  {
    title: 'AI & Machine Learning Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
   {
    name: 'php',
    icon: php,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
   {
    name: 'net',
    icon: net,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'National Level Hackathon',
    company_name: 'DAIICT',
    icon: coverhunt,
    iconBg: '#333333',
    date: '22 Sep 2023 - 24 Sep 2023',
  },
  {
    title: 'SIH',
    company_name: 'Smart India Hackathon',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2024 - april 2024',
  },
  {
    title: 'Prodigy Infotech',
    company_name: 'internship',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2024 - Dec 2024',
  },
  {
    title: 'Tatvasoft',
    company_name: 'internship',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2025 - Jun 2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Shayoka ESS',
    description: 'A animated website for the IT Company.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ESS,
    repo: 'https://github.com/RajPrajapati121/Shayoka-Energy-Saving-System',
    demo: 'https://www.shayokaess.com/',
  },
  {
    id: 'project-2',
    name: 'Apple-Phone',
    description:
      'An iphone website made using three,js ,gsap,webgl.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: apple,
    repo: 'https://github.com/RajPrajapati121/Apple-Store',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Placement-Portal',
    description: 'A collage placement portal where students,company and collage easily interact with each other',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ldrp,
    repo: 'https://github.com/RajPrajapati121/LDRP-Placement-Portal',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/RajPrajapati121/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Agrivista',
    description:
      'It is ML model trained web where plant can be predicated according to their envirnoment.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: agri,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
