import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.webp";
import card2 from "../../assets/images/portfolio-images/card-2.webp";
import card3 from "../../assets/images/portfolio-images/card-3.webp";
import card4 from "../../assets/images/portfolio-images/card-4.webp";
import card5 from "../../assets/images/portfolio-images/card-5.webp";
import card6 from "../../assets/images/portfolio-images/card-6.webp";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "MOBILE APP",
    title: "Crop Connect",
    description:
      "A farmer-friendly app that helps users get fair crop prices using real-time weather data.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "WEB DEVELOPMENT",
    title: "Portfolio Website",
    description:
      "A clean and responsive personal portfolio built to showcase my projects and skills.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "WEB APP",
    title: "Private Chat App (React.js)",
    description:
      "A secure chat platform with online status, typing indicators, and image-sharing features.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "WEB DEVELOPMENT",
    title: "Gram Aarogya Sanjivani",
    description:
      "A healthcare website built for rural communities focusing on accessibility and simplicity.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "MOBILE APP",
    title: "Weather App",
    description:
      "A minimal weather forecasting app providing accurate, real-time weather updates.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "WEB SECURITY",
    title: "Phishing URL Detector",
    description:
      "A smart system that detects suspicious URLs using ML-based patterns and rule-based checking.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A quick showcase of the projects I’ve built — simple, clean, and built
            with real-world use cases in mind.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
