import htmlImg from "./assets/html.png";
import cssIcon from "./assets/css-3.png";
import jsIcon from "./assets/js.png";
import reactIcon from "./assets/atom.png";
import nextIcon from "./assets/nextjs.png";
import firebaseIcon from "./assets/firebase.svg";
import corpusImg from "./assets/corpus.svg";
import dukaanIcon from "./assets/dukaanIcon.png";
import weatherImg from "./assets/weather-removebg-preview.png";
import clawImg from "./assets/claw.png";
import booksImg from "./assets/books-png.png";
import linkedIn from "./assets/linkedin-icon.png";
import git from "./assets/github-icon.png";
import mail from "./assets/mail.png";
import tailwindIcon from "./assets/tailwind.png";
import typescriptIcon from "./assets/typescript.png";
import nodeIcon from "./assets/node.png";
import expressIcon from "./assets/express.jpg";
import strapiIcon from "./assets/strapi.png";
import graphqlIcon from "./assets/graphql.png";
import mongoIcon from "./assets/mongo.png";
import carIcon from "./assets/carsLogo.png";

export const data = {
  introSection: {
    salutation: "Hello,",
    name: "Priya",
    designation: "MERN Developer",
    description: [
      "I am a dedicated developer on an unceasing journey",
      "of self-improvement, committed to deepening",
      "my expertise and pushing the boundaries of my field",
      "to achieve the highest level of excellence.",
    ],
  },

  aboutSection: {
    title: "What I do?",
    description: "Here's the spark that fuels my boundless curiosity :",
    card1: {
      title: "UI/UX Designer",
      text: "As a passionate and motivated UI/UX design student, I approach design challenges with creativity and user-centricity. Through coursework and personal projects, I've honed my skills in wireframing, prototyping, and problem-solving. My portfolio showcases my dedication to creating intuitive, aesthetically pleasing digital experiences.",
    },
    card2: {
      title: "Web Developer",
      text: "As a dedicated frontend web developer, I specialize in crafting visually stunning and highly responsive user interfaces. My proficiency in HTML, CSS, and JavaScript, along with a keen eye for design, allows me to create seamless and engaging web experiences. Explore my portfolio to see my commitment to creating captivating and user-friendly websites.",
    },
  },

  skillSection: {
    title: "Skills",
    text: "",
    skills: [
      {
        label: "HTML",
        img: htmlImg,
      },
      {
        label: "CSS",
        img: cssIcon,
      },
      {
        label: "JAVASCRIPT",
        img: jsIcon,
      },
      {
        label: "REACT JS",
        img: reactIcon,
      },
      {
        label: "NEXT JS",
        img: nextIcon,
      },
      {
        label: "FIREBASE",
        img: firebaseIcon,
      },
      {
        label: "TAILWIND CSS",
        img: tailwindIcon,
      },
      {
        label: "NODE JS",
        img: nodeIcon,
      },
      {
        label: "TYPESCRIPT",
        img: typescriptIcon,
      },
      {
        label: "EXPRESS JS",
        img: expressIcon,
      },
      {
        label: "MONGO DB",
        img: mongoIcon,
      },
      {
        label: "STRAPI",
        img: strapiIcon,
      },
      {
        label: "GRAPHQL",
        img: graphqlIcon,
      },
    ],
  },

  workSection: {
    title: "Work experience",

    projects: [
      {
        img: corpusImg,
        color: "#FEFE8C",
        hover: "#feef02",
        name: "Corpus",
        desc: "We’ll help you liquidate your startup shares! Just share a few points and get started quick on your liquidity journey",
        vercel: "https://nextjs-git-prod-vdiminfonates-projects.vercel.app/",
      },
    ],
  },

  projectsSection: {
    title: "My Projects",
    description:
      "I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.",

    projects: [
      {
        img: clawImg,
        color: "#cab493",
        hover: "#866c4b",
        name: "PeTrack",
        desc: "PetTrack lets pet owners list their pets with QR codes on collars, helping find lost pets quickly and reunite them with their owners.",
        git: "https://github.com/priyarathore20/pets-care",
        vercel: "https://petrack.vercel.app/",
      },
      {
        img: dukaanIcon,
        color: "#fff",
        hover: "#65A0cd",
        name: "Dukaan dashboard",
        desc: "I meticulously translated design concepts into a pixel-perfect, static website, ensuring every detail was flawlessly captured.",
        git: "https://github.com/priyarathore20/payouts",
        vercel: "https://payouts-nu.vercel.app/",
      },
      {
        img: carIcon,
        color: "#ecd982",
        hover: "#ecd952",
        name: "Cars-hub API",
        desc: "It retrieves global car data and presents it with visually appealing images. We can also sort by brand, year, fuel type, and model.",
        git: "https://github.com/priyarathore20/Cars-hub",
        vercel: "https://cars-hub-rapid-api.vercel.app/",
      },
      {
        img: weatherImg,
        color: "#AF73AE",
        hover: "#f273be",
        name: "Weather forecast",
        desc: "Accurate global weather forecasts at your fingertips, ensuring you're always prepared.",
        git: "https://github.com/priyarathore20/weather-forecast",
        vercel: "https://weather-forecast-chi-lac.vercel.app/",
      },
      {
        img: booksImg,
        color: "#df645a",
        hover: "#852119",
        name: "Google books API",
        desc: "A project using the Google Book API to access and display book-name on search.",
        git: "https://github.com/priyarathore20/Books-app",
        vercel: "https://books-app-beta.vercel.app/",
      },
    ],
  },

  footer: [
    { href: "https://www.linkedin.com/in/priya-rathore20", img: linkedIn },
    { href: "https://github.com/priyarathore20", img: git },
    { href: "mailto:rathorepriya1705@gmail.com", img: mail },
  ],
};
