import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.5 lg:p-6 flex rounded-[10px] bg-white hover:shadow-[0_0_37px_5px_rgba(0,0,0,0.1)] duration-300 cursor-pointer max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* ICON BOX */}
      <div
        className={`h-10 md:h-12 aspect-square center rounded-[4px] transition-all ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        }`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl transition-all ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>

      {/* TEXT */}
      <div className="ms-3.5">
        <p className="text-[12px] md:text-[14px] text-[#424E60]">
          {item?.title}
        </p>
        <p className="text-[14px] md:text-[16px] text-[#132238] font-medium">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
