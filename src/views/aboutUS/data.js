import image1 from "../../assets/sobre-nosotros1.jpg";
import haditaImg from "../../assets/haditaImg.PNG";
import micaImg from "../../assets/micaImg.jpg";
import giseImg from "../../assets/giseImg.jpg";
import linkedinVector from "../../assets/linkedinVector.svg";
import githubVector from "../../assets/githubVector.svg";
import behanceVector from "../../assets/behanceVector.svg";
import celImg from "../../assets/celImg.jpg";

export const cards = [
  {
    name: "María Sofia Terragno",
    role: "Diseñadora UX",
    mail: "sofiaterragno@gmail.com",
    links: [
      {
        link: "www.linkedin.con",
        icon: linkedinVector,
      },
      { link: "https://www.behance.net/msterragno", icon: behanceVector },
    ],
    img: image1,
  },
  {
    name: "Ana",
    role: "Coordinadora",
    mail: "",
    links: [
      {
        link: "https://www.linkedin.com/in/anagdev/",
        icon: linkedinVector,
      },
      { link: "https://github.com/anaggithub", icon: githubVector },
    ],
    img: haditaImg,
  },
  {
    name: "Micaela",
    role: "Desarrolladora",
    mail: "",
    links: [
      {
        link: "https://www.linkedin.com/in/micaela-orellano-983a35199/",
        icon: linkedinVector,
      },
      { link: "https://github.com/Micaela2016", icon: githubVector },
    ],
    img: micaImg,
  },
  {
    name: "Giselle",
    role: "Desarrolladora",
    mail: "",
    links: [
      {
        link: "https://www.linkedin.com/in/gisellechaumontmohr/",
        icon: linkedinVector,
      },
      { link: "https://github.com/gisellechaumont", icon: githubVector },
    ],
    img: giseImg,
  },
  {
    name: "Celeste",
    role: "Desarrolladora",
    mail: "",
    links: [
      {
        link: "https://www.linkedin.com/in/celeste-cabrera/",
        icon: linkedinVector,
      },
      { link: "https://github.com/celcab27", icon: githubVector },
    ],
    img: celImg,
  },
];
