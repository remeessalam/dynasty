import homeaboutusimage from "../assets/image/homeaboutusimage.png";
const HomeAbout = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block" data-aos="fade-right">
            <span className="text-black font-medium flex items-center gap-4">
              {" "}
              <div className="w-6 h-[2px] bg-orange-500 inline-flex " />
              ABOUT US
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            data-aos="fade-right"
          >
            Driving digital transformation with expertise in{" "}
            <span className="text-[#FFD700]">AI</span>,{" "}
            <span className="text-[#FFD700]">Blockchain</span>,{" "}
            <span className="text-[#FF6B35]">AR/VR</span>,{" "}
            <span className="text-[#FF6B35]">Machine Learning</span>, and{" "}
            <span className="text-gray-900">Custom Development</span>
          </h2>

          <p className="text-gray-600 leading-relaxed" data-aos="fade-right">
            At KYRONIS TECHNOLOGY, we combine innovation with technical
            excellence to deliver tailored solutions that empower businesses to
            excel in a digital-first world. With expertise spanning AI, VR/AR,
            Blockchain, and custom software, we transform ideas into impactful
            realities.
          </p>
        </div>

        <div
          className="relative h-[400px] md:h-[500px]  rounded-lg overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src={homeaboutusimage}
            alt="VR Technology Visualization"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
