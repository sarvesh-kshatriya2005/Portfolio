import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About Me", url: "profile" },
  { id: 3, name: "My Workflow", url: "workflow" }, 
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  const active = document.activeElement;
  if (active instanceof HTMLElement) active.blur();
};

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        onClick={handleMenuClick}
        to={item.url}
        smooth={true}
        duration={900}
        spy={true}
        offset={-140}
        activeStyle={{
          backgroundColor: "#9929fb",
          color: "white",
        }}
        className="hover:text-picto-primary px-5 py-3 mx-1 cursor-pointer"
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-700`}
    >
      <div className="navbar flex justify-between mx-auto content">

        {/* Left Section */}
        <div className="flex items-center justify-between">

          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box mt-3 w-screen p-2 shadow bg-white text-black font-semibold"
            >
              {menu}
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={900}
                  className="hover:text-picto-primary px-5 py-3 mx-1 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center cursor-pointer"
          >
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Hi, I'm Sarvesh
            </p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex items-center">

          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium">
            {menu}
          </ul>

          {/* Single desktop Contact button */}
          <p>
            <Link
              to="contact"
              smooth={true}
              duration={900}
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary cursor-pointer"
            >
              Contact
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
