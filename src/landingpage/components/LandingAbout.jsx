import appdevelopment from "../../assets/image/landingpage/appdevelopment.jpg";
import webdevelopment from "../../assets/image/landingpage/webdevelopment.jpg";
// eslint-disable-next-line
const LandingAbout = ({ page }) => {
  const isWebDevelopment = page === "web";

  return (
    <>
      <div>
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-black font-medium flex items-center gap-4">
                {" "}
                <div className="w-6 h-[2px] bg-orange-500 inline-flex " />
                ABOUT US
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Driving digital transformation with expertise in{" "}
              <span className="text-[#FFD700]">
                {isWebDevelopment ? `Web Development` : `App Development`}
              </span>
            </h2>

            <p className="text-gray-600 desc">
              {isWebDevelopment
                ? "At KYRONIS TECHNOLOGY, we specialize in creating dynamic, user-friendly web solutions that help businesses thrive in the digital space. We focus on custom web development, responsive design, and scalable applications, ensuring your brand stands out and delivers exceptional experiences online."
                : "At KYRONIS TECHNOLOGY, we focus on developing innovative mobile apps that provide seamless experiences on any device. Whether it's iOS or Android, we create mobile solutions that are intuitive, engaging, and built to scale, helping your business reach its full potential in the app-driven world."}
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px]  rounded-lg overflow-hidden">
            <img
              src={isWebDevelopment ? webdevelopment : appdevelopment}
              alt="VR Technology Visualization"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingAbout;
