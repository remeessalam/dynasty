import { BiUserCircle } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
// eslint-disable-next-line
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#FFF5EE] p-6 rounded-lg flex flex-col gap-4 md:max-w-sm"
    >
      <div className="flex items-center gap-4">
        {icon === "BiUserCircle" && (
          <BiUserCircle className="min-w-[4rem] h-[5rem] text-[#FF6B35]" />
        )}
        {icon === "FaChartBar" && (
          <FaChartBar className="min-w-[4rem] h-[5rem] text-[#FF6B35]" />
        )}
        {icon === "FaHandshakeAngle" && (
          <FaHandshakeAngle className="min-w-[4rem] h-[5rem] text-[#FF6B35]" />
        )}
        <div>
          <h3 className="text-[#FF6B35] font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
