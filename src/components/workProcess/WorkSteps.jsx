const WorkSteps = ({ data, style }) => {
  return (
    <div
      className={`group rounded-xl transition-all duration-300 hover:shadow-xl border border-gray-200 p-5 sm:p-7 ${style}`}
    >
      {/* Icon Box */}
      <div
        className="
          w-12 h-12 sm:w-16 sm:h-16 
          flex items-center justify-center
          bg-[#EDD8FF80] 
          rounded-md 
          transition-all duration-300
          group-hover:bg-picto-primary
        "
      >
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300"
          fill="none"
        >
          <path
            d={data?.svgPath}
            className="transition-all duration-300"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Text Section */}
      <div className="mt-4 sm:mt-6">
        <p className="font-semibold sm:text-xl">
          {data?.id}. {data?.title}
        </p>

        <p className="mt-2 text-sm sm:text-[16px] text-[#697482] leading-relaxed">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
