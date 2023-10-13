import htmlImg from '../src/assets/html.png'
import cssIcon from '../src/assets/css-3.png'
import jsIcon from "../src/assets/js.png"
import reactIcon from '../src/assets/atom.png'
import firebaseIcon from '../src/assets/firebase.svg'

export const data = {
  introSection: {
    salutation: "Hello,",
    name: "Priya",
    designation: "Web Developer",
    description: [
      "I'm a skilled web developer with experience in creating visually",
      "appealing and user friendly websites.",
    ],
  },

  aboutSection: {
    title: "What I do",
    description:
      " i am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. i have a strong understanding of design and a keen eye for detail. i am proficient in HTML, CSS and Javascript, as well as design software such as adobe photoshop and illustrator.",
    card1: {
      title: "UI/UX Designer",
      text: "This is a demo text. You can write your own content here.",
    },
    card2: {
      title: "Web Designer",
      text: "This is a demo text. You can write your own content here.",
    },
    card3: {
      title: "App Designer",
      text: "This is a demo text. You can write your own content here.",
    },
  },

  skillSection: {
   title: 'Skills',
   text: "",
   skills: [
      {
         label: 'HTML',
         img: htmlImg
      },
      {
         label: 'CSS',
         img: cssIcon
      },
      {
         label: "JAVASCRIPT",
         img: jsIcon
      },
      { 
         label: "REACT",
         img: reactIcon
      },
      {
         label: "FIREBASE",
         img: firebaseIcon
      },

   ]
  },

  workSection: {
    title: "My Portfolio",
    text: "I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.",
  },

  socialLinks: {
   linkedIn : "",
   github : ""
  }
};
