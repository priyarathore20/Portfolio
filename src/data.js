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

  socialLinks: {
   linkedIn : "",
   github : ""
  }
};
