import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../data/constant";

// eslint-disable-next-line
const LandingServices = ({ page }) => {
  const services =
    page === "web" ? webDevelopmentServices : appDevelopmentServices;

  return (
    <div id="services" className="flex justify-center relative wrapper">
      <div className="py-10 flex flex-col items-center gap-5 z-10 text-black">
        <div className="w-full text-center">
          <span className="text-black font-medium uppercase flex items-center justify-center w-full gap-4">
            {" "}
            <div className="w-6 h-[2px] bg-orange-500 inline-flex " />
            {`Our ${page === "web" ? "Web" : "App"} Development Services`}
          </span>
        </div>

        <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
          {page === "web" &&
            "Exceptional Web Development to Strengthen Your Digital Presence"}
          {page === "app" &&
            "Innovative App Development for Engaging Mobile Experiences"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl text-desc">
          {page === "web" &&
            "Professional web development services tailored to create robust, responsive, and visually appealing websites that reflect your brand and drive growth."}
          {page === "app" &&
            "Advanced app development solutions focused on building secure, scalable, and intuitive mobile applications that connect with your audience and elevate your brand."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow-2xl transition-all border-2 border-primary/40 bg-white hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg"
            >
              <div className="flex h-full flex-col gap-2 items-center text-center text-black p-5 rounded-lg">
                <div>
                  {" "}
                  <item.img className="w-16 h-16" />
                </div>
                <h6 className="text-lg font-semibold ">{item.title}</h6>
                <p className="text-md text-black/70 text-desc">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
