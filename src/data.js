import htmlImg from '../src/assets/html.png'
import cssIcon from '../src/assets/css-3.png'
import jsIcon from "../src/assets/js.png"
import reactIcon from '../src/assets/atom.png'
import firebaseIcon from '../src/assets/firebase.svg'
import instaImg from '../src/assets/instagram (1).png'
import wtsapImg from '../src/assets/whatsapp.png'
import netflixImg from '../src/assets/netflix.png'
import cartImg from '../src/assets/e-cart.jpg'
import booksImg from '../src/assets/books-png.png'
import linkedIn from '../src/assets/linkedin-icon.png'
import git from '../src/assets/github-icon.png'
import mail from '../src/assets/mail.png'

export const data = {
  introSection: {
    salutation: "Hello,",
    name: "Priya",
    designation: "Web Developer",
    description: [
      "I am a dedicated developer on an unceasing journey", "of self-improvement, committed to deepening", "my expertise and pushing the boundaries of my field", "to achieve the highest level of excellence.",
    ]
  },

  aboutSection: {
    title: "What I do?",
    description:
      "Here's the spark that fuels my boundless curiosity :",
    card1: {
      title: "UI/UX Designer",
      text: "As a passionate and motivated UI/UX design student, I approach design challenges with creativity and user-centricity. Through coursework and personal projects, I've honed my skills in wireframing, prototyping, and problem-solving. My portfolio showcases my dedication to creating intuitive, aesthetically pleasing digital experiences."
      ,
    },
    card2: {
      title: "Web Developer",
      text: "As a dedicated frontend web developer, I specialize in crafting visually stunning and highly responsive user interfaces. My proficiency in HTML, CSS, and JavaScript, along with a keen eye for design, allows me to create seamless and engaging web experiences. Explore my portfolio to see my commitment to creating captivating and user-friendly websites.",
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
  
  projects:[
    {
      img: wtsapImg,
      color: "#229b5e",
      hover: "#167043",
      name: "Whatsapp clone",
      desc: "A messaging app replicating the core features and functionality of WhatsApp, offering secure and seamless communication.",
      git: "https://github.com/priyarathore20/whatsapp-clone",
      vercel: ""
    },
    {
      img: instaImg,
      color: "#d87696",
      hover: "#a95470",
      name: "Instagram clone",
      desc: "A social media platform mimicking the key features of Instagram, facilitating photo with friends",
      git: "https://github.com/priyarathore20/Instagram-clone",
      vercel: ""
    },
    {
      img: cartImg,
      color: "#eb7966",
      hover: "#be5341",
      name: "Shopping cart",
      desc: "An e-commerce shopping cart system for users to add, view, and purchase selected products.",
      git: "https://github.com/priyarathore20/Shopping-Cart",
      vercel: ""
    },
    {
      img: netflixImg,
      color: "gray",
      hover: "rgb(60,60,60)",
      name: "Netflix home page",
      desc: "I attempted to create a static replica of Netflix's homepage.",
      git: "https://github.com/priyarathore20/netflix-webpage",
      vercel: ""
    },
    {
      img: booksImg,
      color: "blueviolet",
      hover: "#441570",
      name: "Google books API",
      desc: "A project using the Google Books API to access and display book-name on search.",
      git: "https://github.com/priyarathore20/Books-app",
      vercel: ""
    }
  ]
  },

  footer: [
   {linkedIn : "", img: ""},
   {github : "", img: ""},
   {email:'', img: ""} 
  ]
};


