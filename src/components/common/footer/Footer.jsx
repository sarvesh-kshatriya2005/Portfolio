const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About Me", url: "profile" },
  { id: 3, name: "Services", url: "services" },
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">

        
        {/* Footer Navigation */}
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] sm:text-[16px]">
          © {copyrightYear} Sarvesh. All rights reserved.
        </p>
      </div>

      {/* Credits */}
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Designed with ❤️ by Sarvesh
      </p>
    </div>
  );
};

export default Footer;
