import ReactPlayer from "react-player";
import homeBannerVideo from "../assets/video/homebannervideo.mp4";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <div>
      <div
        id="banner"
        className="w-screen min-h-screen relative mt-[5rem] md:mt-0 "
      >
        <ReactPlayer
          url={homeBannerVideo}
          playing
          loop
          muted
          playsinline
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
                muted: true,
                playsInline: true,
              },
            },
          }}
        />
        <div className="bg-black/50  absolute w-full h-full"></div>
        <div className="pt-[3rem] sm:wrapper py-5 sm:py-0 flex items-center h-full md:pt-[10rem]">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-end gap-5 text-end "
          >
            <h1 className="heading-main text-black">
              Welcome to <br />
              Where <span className="text-orange-900">Innovation</span> <br />
              Meets <span className="text-orange-500">Excellence.</span>
            </h1>
            <p className="desc sm:max-w-[50%]">
              At [Your Company Name], we’re all about creating digital solutions
              that are powerful, engaging, and tailored to meet your unique
              business needs. Specializing in the latest tech across AI, VR &
              AR, Blockchain, Machine Learning, Mobile Apps, Chatbots, Games,
              and Custom Software Development, we’re here to turn your vision
              into reality.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
