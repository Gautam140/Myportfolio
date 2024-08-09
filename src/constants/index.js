import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With a year of hands-on experience, I have honed my skills in front-end technologies like React and Javascript, as well as back-end technologies like Express.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a years of professional experience, I have worked with a variety of technologies, including React, Javascript, Tailwind CSS, Express.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Web Developer",
    company: "Oasis Infobyte",
    description: `Focused on ReactJS development and design, creating responsive and user-friendly web applications. Implemented design principles and best practices to  deliver intuitive user interfaces. Collaborated with cross-functional teams to integrate designs seamlessly into ReactJS projects, ensuring optimal performance and user experience.`,
    technologies: ["Javascript", "React.js", "TailwindCSS", "Framer Motion"],
  },
  {
    year: "Feb 2024 - March 2024",
    role: "React Developer",
    company: "VeriTech Software It Services",
    description: `Contributed to open source industry initiatives and developed projects to expand expertise in ReactJS. Worked on various projects, enhancing skills in front-end development, problem-solving, and collaboration within the developer community.`,
    technologies: ["HTML", "CSS", "React.js", "TailwindCSS"],
  },
  {
    year: "March 2023 - April 2023",
    role: "Database",
    company: "Hack It Sapiens Hackathon",
    description: `Serving as an Co-organizer for the 36-hour Hack it Sapiens hackathon in India, 
Managed a database during the hackathon.`,
    technologies: ["MySql"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: " StudyNotion Edtech App (MERN Stack + Razorpay Integration)",
    image: project1,
    description:
      "Developed an EdTech platform using the MERN stack where students can purchase courses and instructors can create and manage their own courses. Implemented key features like user authentication, course categorization, and progress tracking. Integrated Razorpay for secure payment processing, offering a seamless and efficient e-learning experience.",
    technologies: ["React.js", "TailwindCSS", "Express.js", "MongoDB", "Postman API"],
  },
  {
    title: "Blog Website (HTML, CSS,  ReactJS)",
    image: project2,
    description:
      " Engineered visually stunning web applications with ReactJS, applying meticulous design principles and collaborating seamlessly across teams to enhance user engagement and achieve a 30% improvement in application performance.",
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      " Meticulously crafted with React.js and styled with Tailwind CSS. Dynamic animations powered by Framer Motion bring my experience and projects to life, showcasing my skills and creativity in web development.",
    technologies: ["React.js", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Weather App",
    image: project4,
    description:
      "Instantly get accurate weather updates for your current location or search for any city worldwide. Fast, reliable, and easy to use – WeatherNow keeps you informed and prepared.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Poornima College, Jaipur",
  phoneNo: "9116095535",
  email: "guptagautam2580@gmail.com",
};
