import { FaAngleRight } from "react-icons/fa";

// eslint-disable-next-line
const PageBanner = ({ page, bannerImage }) => {
  return (
    <div
      className="w-full min-h-[55vh] h-fit py-[1rem] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute top-0 w-full h-full bg-black/30"></div>
      {/* <div className="absolute top-1/2 -translate-y-[20%] left-1/2 -translate-x-1/2 w-full"> */}
      <div className="w-full translate-y-[15%]">
        <div data-aos="fade-up" className="wrapper text-center">
          <h1 className="text-6xl font-extrabold text-white">{page}</h1>
          <h6 className="heading-1 text-white flex items-center gap-2 mt-5 justify-center">
            Home <FaAngleRight />
            <span>{page}</span>
          </h6>
          {/* {desc && (
            <p className="desc mt-3 max-w-[55rem] mx-auto drop-shadow-2xl !text-white !text-base !font-medium">
              {desc}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
