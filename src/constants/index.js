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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  flask,
  trilogy,
  elgaroma,
  ibm,
  incubator,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "Flask",
  //   icon: flask,
  // },
];

const experiences = [
  {
    title: "React.js Developer Intern",
    company_name: "Triology",
    icon: trilogy,
    iconBg: "#383E56",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed a SpaceX Launch Tracker landing page using ReactJS. The landing page provides users with a comprehensive list of all SpaceX launches, including both past and upcoming launches.",
      "Each launch entry displays essential information, such as the launch date, time, and landing status.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Native Developer Intern",
    company_name: "Elgaroma",
    icon: elgaroma,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React Native and other related technologies.",
      "Developed a Task Tracking mobile application using React Native. The app offers users a convenient and efficient way to manage their tasks by providing various essential features.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Demonstrated my proficiency in state management, user interface design, and data persistence on mobile devices.",
    ],
  },
  {
    title: "SalesForce Developer Intern",
    company_name: "SmartBridge IBM",
    icon: ibm,
    iconBg: "#383E56",
    date: "May 2023 - Jul 2023",
    points: [
      "Have honed my skills in various aspects of the Salesforce platform, empowering businesses with robust and customized solutions.",
      "Have hands-on experience in creating visually appealing and functional Visualforce pages and components. These components enhance the user experience and streamline workflows, contributing to increased productivity.",
      "With a strong foundation in CRM, data management, security, Apex, and Visualforce, I am equipped to tackle complex Salesforce projects and deliver exceptional results.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Innovation Incubator",
    icon: incubator,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining the software called IMS using Angular, Node.js, and other related technologies.",
      "Working in a team environment, I actively collaborated with fellow developers, project managers, and stakeholders. I participated in code reviews and provided valuable feedback to enhance code quality and project efficiency.",
      "Took on the responsibility of identifying and resolving bugs and issues within the IMS. Engaged in troubleshooting activities to ensure a smooth user experience.",
      "Embraced Agile development practices, participating in daily stand-ups, sprint planning, and retrospectives. This Agile approach allowed the team to adapt quickly to changing requirements and deliver incremental updates to the IMS.",
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
    name: "Jarvis: Virtual Assistant",
    description:
      "Jarvis is a cutting-edge virtual assistant designed to simplify your life and boost your productivity. Developed entirely in Python, Jarvis comes packed with over 30 powerful features to assist you with a wide range of tasks. Whether it's managing your schedule, answering questions, automating repetitive tasks, or even just having a friendly conversation, Jarvis has got you covered.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "voice recognition",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sarthak-code360/Jarvis_Virtual_Assistant",
  },
  {
    name: "SpaceX: Launch Tracker",
    description:
      "This Web App is a state-of-the-art application built using the popular JavaScript framework ReactJS. It  is built with the latest technologies and follows best practices to ensure speed, reliability, and user satisfaction. This app allows space enthusiasts and curious minds to stay up-to-date with the latest SpaceX rocket launches, missions, and important details.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "real-time updates",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sarthak-code360/SpaceX_WebApp",
  },
  {
    name: "Task Tracker",
    description:
      "This Mobile App is built with React Native's cross-platform capabilities, ensuring that you get a consistent and native-like feel on both Android and iOS devices. Stay organized, boost your productivity, and never let important tasks slip. Building a functional app would require development using React Native, database integration, API connectivity, and UI/UX design for a complete and robust experience.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Sarthak-code360/ReactNativeApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
