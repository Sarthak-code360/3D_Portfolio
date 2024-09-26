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
  mazout,
  elgaroma,
  ibm,
  incubator,
  carrent,
  jobit,
  tripguide,
  threejs,
  evMonitor,
  whiteboard,
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
    title: "Software Engineer",
    company_name: "Mazout",
    icon: mazout,
    iconBg: "#FFF",
    date: "Jun 2024 - Present",
    points: [
      "Led the full-stack development of a React Native application using Expo, TypeScript, and JavaScript, integrating with a Node.js backend via gRPC for seamless real-time communication.",
      "Implemented Bluetooth-based hardware authentication and real-time data streaming from devices to the app, leveraging MongoDB for data storage and Socket.IO for real-time updates.",
      "Developed features to track GPS, Geofencing, Immobilization, monitor hardware battery health, and ensure continuous device connectivity, providing comprehensive telemetry and analytics.",
      "Engineered a robust system architecture to handle hardware-to-server data flow, optimizing app performance and ensuring a seamless user experience with dynamic data presentation.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Innovation Incubator",
    icon: incubator,
    iconBg: "#FFF",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining the software called IMS using Angular, Node.js, and other related technologies.",
      "Working in a team environment, I actively collaborated with fellow developers, project managers, and stakeholders. I participated in code reviews and provided valuable feedback to enhance code quality and project efficiency.",
      "Took on the responsibility of identifying and resolving bugs and issues within the IMS. Engaged in troubleshooting activities to ensure a smooth user experience.",
      "Embraced Agile development practices, participating in daily stand-ups, sprint planning, and retrospectives. This Agile approach allowed the team to adapt quickly to changing requirements and deliver incremental updates to the IMS.",
    ],
  },
  {
    title: "SalesForce Developer Intern",
    company_name: "SmartBridge IBM",
    icon: ibm,
    iconBg: "#FFF",
    date: "May 2023 - Jun 2023",
    points: [
      "Have honed my skills in various aspects of the Salesforce platform, empowering businesses with robust and customized solutions.",
      "Have hands-on experience in creating visually appealing and functional Visualforce pages and components. These components enhance the user experience and streamline workflows, contributing to increased productivity.",
      "With a strong foundation in CRM, data management, security, Apex, and Visualforce, I am equipped to tackle complex Salesforce projects and deliver exceptional results.",
    ],
  },
  {
    title: "React Native Developer Intern",
    company_name: "Elgaroma",
    icon: elgaroma,
    iconBg: "#000",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React Native and other related technologies.",
      "Developed a Task Tracking mobile application using React Native. The app offers users a convenient and efficient way to manage their tasks by providing various essential features.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Demonstrated my proficiency in state management, user interface design, and data persistence on mobile devices.",
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
    name: "X1: EV Monitor & Controller",
    description:
      "This mobile app, built with React Native's cross-platform capabilities, delivers a seamless, native-like experience on both Android and iOS. It empowers vendors to efficiently manage inventory, process orders, and verify product authenticity. The app's development involves React Native, database integration, API connectivity, and a well-crafted UI/UX design to ensure a complete and robust user experience.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "ble-manager",
        color: "blue-text-gradient",
      },
    ],
    image: evMonitor,
    source_code_link: "https://github.com/Mazout-Electric/vendor-application",
  },
  {
    name: "DoodleDash: Real-time Whiteboard",
    description:
      "It's an innovative real-time, multi-user interactive whiteboard that allows users to draw, annotate, and share in real-time, supporting seamless collaboration. It features text recognition to convert handwritten text into computerized text, enhancing productivity across educational and professional settings. With live updates, shape recognition, undo/redo functionality, and user-specific permissions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "tesseractjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: whiteboard,
    source_code_link: "https://github.com/Sarthak-code360/Doodle_Dash",
  },
  {
    name: "Jarvis: Virtual Assistant",
    description:
      "Jarvis is an advanced virtual assistant designed to streamline daily tasks and enhance productivity. Built entirely in Python, it offers over 30 powerful features, from managing schedules and answering queries to automating routine processes and engaging in natural conversations. With its robust integration of AI and machine learning, Jarvis is engineered to deliver efficient, intelligent assistance across a wide range of applications.",
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
        name: "speech-recognition",
        color: "pink-text-gradient",
      },
      {
        name: "automation",
        color: "blue-text-gradient",
      },
      {
        name: "API's",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sarthak-code360/Jarvis_Virtual_Assistant",
  },
];

export { services, technologies, experiences, testimonials, projects };
