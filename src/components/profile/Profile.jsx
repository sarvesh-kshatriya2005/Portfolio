import person from "../../assets/images/person.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white shadow-lg xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Profile Image + Socials */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-52 sm:w-64 md:w-72 lg:w-80 overflow-hidden rounded-xl">
            <img
              src={person}
              alt="Sarvesh Kshatriya — profile"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-4">
            <div className="px-4 py-2 bg-white rounded-md shadow-md">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Profile Text */}
        <div className="w-full lg:max-w-xl">
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-semibold mb-4">
            Web Developer & Aspiring Data Scientist
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600 space-y-2">
            <p>
              I build fast, modern and scalable web applications with clean UI
              and responsive layouts.
            </p>
            <p>
              I also work with data — exploring ML models, visualizations and
              analytics to turn data into insights.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 max-md:justify-center">
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={800}
              offset={-120}
              className="btn xxs:btn-lg px-6 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] cursor-pointer inline-flex items-center"
              aria-label="View projects - scroll to portfolio"
            >
              View Projects
            </ScrollLink>

            <a
              href="CV.png"
              download
              className="btn xxs:btn-lg px-6 xxs:py-3 bg-white border hover:border-picto-primary hover:text-picto-primary duration-300 text-xs xxs:text-[14px] sm:text-[16px] inline-flex items-center"
              aria-label="Download CV"
            >
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
