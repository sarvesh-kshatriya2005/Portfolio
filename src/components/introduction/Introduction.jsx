import person from "../../assets/images/person2.webp";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Info summary data
const informationSummaryData = [
  { id: 1, title: "Experience", description: "3+ Years" },
  { id: 2, title: "Projects", description: "10+ Completed" },
  { id: 3, title: "Current Roles", description: "Web Dev, Data Science" },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-32 mb-10 gap-6 p-2"
      id="introduction"
    >
      {/* LEFT SIDE */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-10 transition-all duration-500">

          <p className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold">
            Hello, I'm
            <span className="block text-nowrap">Sarvesh Kshatriya</span>
          </p>

          <p className="text-sm xxs:text-lg lg:text-[18px] my-6 leading-relaxed text-gray-700">
            Web Developer • UI/UX Designer • Data Science Learner
          </p>

          <p className="text-sm xxs:text-[16px] lg:text-[18px] text-gray-600 leading-relaxed">
            I build clean, modern and fast websites.  
            I also explore machine learning and data-driven solutions.  
            Passionate about creating smooth user experiences and real-world projects.
          </p>

        </div>

        {/* INFO BOXES */}
        <div className="mx-auto lg:mx-0 mt-6">
          <div className="grid grid-cols-3 gap-2 w-fit">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="max-w-134 w-full max-lg:mx-auto aspect-[536/636] relative">
        <img
          className="shadow-2xl shadow-gray-300 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
