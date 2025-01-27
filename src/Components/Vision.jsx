import { Link } from "react-router-dom";
import homepagevision from "../assets/image/homepagevision.png";
const Vision = () => {
  return (
    <div
      className="relative w-full h-[60ch]   py-10 sm:overflow-hidden mt-10 sm:mt-20 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${homepagevision})`,
      }}
    >
      <div className="absolute w-full top-0 h-full  bg-black/50" />

      <div className="wrapper  flex flex-col gap-5 z-20 justify-center items-center h-full">
        <h1 className="text-5xl text-center text-orange-400" data-aos="fade-up">
          Let’s Bring Your Vision to Life – Get
          <br /> in Touch with Us Today
        </h1>
        <p className="text-white" data-aos="fade-up">
          Reach out to us today, and let’s begin the journey of turning your
          vision into a powerful digital solution.
        </p>
        <Link
          to={"/contact-us"}
          className="text-white primary-btn z-40 cursor-pointer"
          data-aos="fade-up"
        >
          Contact US
        </Link>
      </div>
    </div>
  );
};

export default Vision;
