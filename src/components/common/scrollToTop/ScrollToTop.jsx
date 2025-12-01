import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = {
  duration: 500,
  smooth: true,
};

const scrollToTop = () => {
  animateScroll.scrollToTop(options);
};

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-5 w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 
        flex justify-center items-center rounded-full bg-picto-primary text-white
        transition duration-500 ease-in-out hover:scale-110 hover:bg-picto-primary-dark z-10
        ${position < 200 ? "scale-0" : "scale-100"}`}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faAngleUp} size="2xl" />
    </button>
  );
};

export default ScrollToTop;
