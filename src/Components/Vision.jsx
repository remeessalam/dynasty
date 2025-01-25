import homepagevision from "../assets/image/homepagevision.png";
const Vision = () => {
  return (
    <div
      className="relative w-full h-[60ch] -z-20  py-10 sm:overflow-hidden mt-10 sm:mt-20 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${homepagevision})`,
      }}
    >
      <div className="absolute w-full top-0 h-full -z-10 bg-black/50" />

      <div className="wrapper  flex flex-col gap-5 justify-center items-center h-full">
        <h1 className="text-5xl text-center text-orange-400">
          Let’s Bring Your Vision to Life – Get
          <br /> in Touch with Us Today
        </h1>
        <p className="text-white">
          Reach out to us today, and let’s begin the journey of turning your
          vision into a powerful digital solution.
        </p>
        <div className="text-white">Contact US</div>
      </div>
    </div>
  );
};

export default Vision;
