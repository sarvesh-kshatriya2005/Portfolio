import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I build fast, responsive and modern web applications using clean, scalable code.",
  },
  {
    id: 2,
    title: "Data Science & AI",
    description:
      "I work with data, build models and create smart solutions that help in better decisions.",
  },
  {
    id: 3,
    title: "UI / UX",
    description:
      "I design clean interfaces and smooth user flows that make products feel effortless.",
  },
];

const Profession = () => {
  return (
    <div
      
      className="content grid md:grid-cols-2 py-10 md:py-15 lg:py-37.5 max-xxl:px-4 xxl:px-2"
    >
      <div className="flex flex-col justify-between my-auto max-md:text-center md:pe-8 lg:pe-35.75">
        <p className="section-title">What I do?</p>

        <p className="mt-6 text-xs sm:text-lg text-gray-400">
          I create modern web apps, work with data & AI, and design clean user
          experiences — everything needed to build smart digital products.
        </p>

        <a
          href="#contact"
          className="btn btn-primary text-white w-fit mt-5 md:mt-12.5 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5 md:py-3 md:px-6"
        >
          Say Hello!
        </a>
      </div>

      <div id="services">
        {rolesData.map((role) => (
          <Roles key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
