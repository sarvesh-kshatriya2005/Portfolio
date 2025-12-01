import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Custom FA-like icons (MIRRORING exact FA dimensions)
const LeetCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M16.37 3.1a1.5 1.5 0 0 1 2.12 2.12l-9.9 9.9a1.5 1.5 0 0 0 0 2.12l5.66 5.66a1.5 1.5 0 0 1-2.12 2.12l-5.66-5.66a4.5 4.5 0 0 1 0-6.36l9.9-9.9z" />
    <path d="M20.49 10.99a1.5 1.5 0 0 1 0 3H9.51a1.5 1.5 0 0 1 0-3h10.98z" />
  </svg>
);

const HackerRankIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4zm3 28h-6V16h6v16z" />
  </svg>
);

// List
const socialIcons = [
  { icon: <FontAwesomeIcon icon={faLinkedin} />, link: "https://www.linkedin.com/in/kshatriya-sarvesh/" },
  { icon: <FontAwesomeIcon icon={faGithub} />, link: "https://github.com/sarvesh-kshatriya2005" },
  { icon: <FontAwesomeIcon icon={faTwitter} />, link: "https://x.com/Kshatriya545" },
  { icon: <FontAwesomeIcon icon={faInstagram} />, link: "https://www.instagram.com/sarvesh_k_777/" },
  { icon: <LeetCodeIcon />, link: "https://leetcode.com/sarvesh_2005/" },
  { icon: <HackerRankIcon />, link: "https://www.hackerrank.com/profile/sarveshkshatriy1" },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-picto-primary hover:bg-picto-primary p-3 hover:text-white rounded-md transition flex items-center justify-center"
          key={index}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};


export default SocialMedia;
