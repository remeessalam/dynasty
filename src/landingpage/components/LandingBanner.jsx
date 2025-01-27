import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import homeBannerVideo from "../../assets/video/homebannervideo.mp4";
// import { images, landingpageimages } from "../../constant";
// eslint-disable-next-line
const LandingBanner = ({ page }) => {
  const isWeb = page === "web";
  return (
    <>
      <div>
        <div id="banner" className="w-screen h-screen relative">
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
          <div className="pt-[3rem] wrapper flex items-center h-full">
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
                {isWeb
                  ? "At [Your Company Name], we’re dedicated to crafting exceptional web development solutions that are powerful, engaging, and tailored to meet your unique business needs. Specializing in cutting-edge technologies for responsive websites, web applications, e-commerce platforms, and custom web solutions, we’re here to bring your vision to life and help your business thrive online."
                  : "At [Your Company Name], we’re focused on creating exceptional app development solutions that are powerful, intuitive, and tailored to meet your unique business needs. Specializing in cutting-edge technologies for mobile apps, cross-platform development, and custom app solutions, we’re here to bring your vision to life and help your business succeed in the mobile-first world."}
              </p>
              <Link to="/contact-us" className="primary-btn mt-2">
                Explore Our Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBanner;
