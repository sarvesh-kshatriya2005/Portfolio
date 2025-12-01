import { useState } from "react";

const Roles = ({ role }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative my-6 p-4 xs:p-8 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex overflow-hidden"
    >
      {/* Left hover bar */}
      <span
        className={`absolute left-0 top-0 h-full bg-picto-primary transition-all duration-300 ${
          isHover ? "w-[5px]" : "w-0"
        }`}
      />

      <div>
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 pb-3">
          {role.title}
        </p>

        <p className="text-[13px] sm:text-[16px] text-gray-700">
          {role.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
