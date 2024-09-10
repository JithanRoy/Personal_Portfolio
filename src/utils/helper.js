import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

import Imaginify from '../assets/img/Project/imaginify.png';
import NewsLetter from '../assets/img/Project/newsLetter.png';
import Tasker from '../assets/img/Project/tasker.png';


export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/jithan-r-2b7a3323b/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/JithanRoy",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaYoutube,
    uri: "",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Tasker",
    imgSrc: Tasker,
    gitURL: "https://tasker-mauve.vercel.app/",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "NewsLetter Platform",
    imgSrc: NewsLetter,
    gitURL: "newsletter-project-six.vercel.app",
  },
  {
    id: `openai-${Date.now()}`,
    name: "Imaginify",
    imgSrc: OpenAI,
    gitURL: "https://github.com/JithanRoy/Imaginify",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Chat App Build",
    imgSrc: ChatApp,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Image Sharing App",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Pixabay Clone 2.0",
    imgSrc: PixabayClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  // {
  //   id: `freshjuiceui-${Date.now()}`,
  //   name: "Fresh Juice UI Build",
  //   imgSrc: FreshJuiceUI,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
  // {
  //   id: `socialmedia-${Date.now()}`,
  //   name: "Social Media App",
  //   imgSrc: SocialMedia,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
  // {
  //   id: `portfoliofirebase-${Date.now()}`,
  //   name: "Portfolio UI Fireabse",
  //   imgSrc: PortfolioFirebase,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
];
