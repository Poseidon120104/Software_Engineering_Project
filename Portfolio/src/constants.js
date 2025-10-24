// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

// Education Section Logo's

import iiitkLogo from './assets/education_logo/iiitk_logo.jpeg';
import dpsmLogo from './assets/education_logo/dpsm_logo.jpeg';
import sxiLogo from './assets/education_logo/sxi_logo.jpeg';


// Project Section Logo's


import wildguardLogo from './assets/work_logo/wildguard_360.png';
import mediassistLogo from './assets/work_logo/mediassist.png';
import raspiLogo from './assets/work_logo/rpi.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 

  export const education = [
  {
    id: 0,
    img: iiitkLogo,
    school: "Indian Institute of Information Technology, Kalyani",
    date: "2022 - Present",
    grade: "9.39 CGPA",
    desc: "Currently pursuing my Bachelor of Technology in Computer Science and Engineering at IIIT Kalyani. My coursework covers core computer science subjects such as Data Structures, Algorithms, Database Management Systems, Computer Networks, Operating Systems, and Artificial Intelligence. I have actively engaged in technical projects and hackathons, gaining hands-on experience in fullstack development, machine learning, and embedded systems. My time here has helped me strengthen my problem-solving abilities, teamwork, and research-oriented thinking.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: sxiLogo,
    school: "St. Xavier's Institution, Panihati",
    date: "2020 - 2022",
    grade: "95.5%",
    desc: "Completed higher secondary education (Class XII) from St. Xavier’s Institution, Panihati, under the ISC board with a focus on Science stream (Physics, Chemistry, Mathematics, and Computer Science). Developed a keen interest in programming and analytical problem-solving during this period, laying the foundation for my pursuit of computer science.",
    degree: "ISC (XII) - Science with Computer Science",
  },
  {
    id: 2,
    img: dpsmLogo,
    school: "Delhi Public School, Megacity",
    date: "2008 - 2020",
    grade: "98.0%",
    desc: "Completed primary and secondary education from DPS Megacity under the CBSE board. Built strong fundamentals in Science and Mathematics while participating in extracurricular activities and school-level competitions that nurtured teamwork, discipline, and curiosity toward technology.",
    degree: "ICSE (X) - Science with Mathematics",
  },
];

  export const experiences = []; 

  export const projects = [
  {
    id: 0,
    title: "WildGuard_360",
    description:
      "A wildlife safety and pet recovery system integrating Flask and React.js with machine learning models. It enables users to classify bird species, locate nearby animal hospitals, and report missing pets using geolocation-based features. The system also supports volunteer coordination, allowing users to claim SOS tickets, earn badges, and appear on a leaderboard for their contributions.",
    image: wildguardLogo,
    tags: ["React JS", "Flask", "MongoDB", "Python", "Machine Learning", "Geolocation", "REST API"],
    github: "https://github.com/Poseidon120104/SC1_WildGuard360", // replace with actual repo
    webapp: "https://wildguard360.netlify.app/", // or your deployed link
  },
  {
    id: 1,
    title: "MediAssist",
    description:
      "A medical symptom-based disease prediction web application built with Flask and React.js. Users can input symptoms, and the system predicts potential diseases using trained machine learning models. The app also provides detailed disease information, enhancing health awareness and preventive care through AI-powered insights.",
    image: mediassistLogo,
    tags: ["Flask", "React JS", "Python", "Machine Learning", "REST API", "Tailwind CSS"],
    github: "https://github.com/Poseidon120104/Status_Code_2", // replace with actual repo
    webapp: "https://mediassistai.netlify.app/", // optional deployment link
  },
  {
    id: 2,
    title: "Raspberry Pi-Based Animal Detection System",
    description:
      "An IoT-based wildlife monitoring system using Raspberry Pi, ultrasonic sensors, and PyCam to detect animal presence. When triggered, the device captures images and sends them to a Flask server for species identification using a machine learning model. Designed to support wildlife conservation, prevent human-animal conflicts, and enable real-time remote monitoring.",
    image: raspiLogo,
    tags: ["Raspberry Pi", "Flask", "Python", "Computer Vision", "IoT", "Machine Learning", "Sensors"],
    github: "https://github.com/Poseidon120104/Sample_github", // replace with your repo link
    webapp: "", // IoT project, so likely not applicable
  },
];
