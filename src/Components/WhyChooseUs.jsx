import whychooseusbg from "../assets/image/whychooseusbg.png";
import whychooseimageone from "../assets/image/whychooseimageone.png";
import whychooseimagetwo from "../assets/image/whychooseimagetwo.png";
import { whyChooseUs } from "../data/constant";

const WhyChooseUs = () => {
  return (
    <div
      className="relative w-full  -z-20   sm:overflow-hidden  bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${whychooseusbg})`,
      }}
    >
      <div className="wrapper grid md:grid-cols-3 py-[5rem] gap-8">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <div className="inline-block">
              <span className="text-black font-medium flex items-center gap-4">
                {" "}
                <div className="w-6 h-[2px] bg-orange-500 inline-flex " />
                ABOUT US
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl mt-10 font-bold leading-tight">
              Choose Us for Innovation, Quality, and Tailored Solutions that
              Drive Your Success.
            </h2>
          </div>
          <img
            src={whychooseimageone}
            alt="whychooseimageone"
            className="mt-5"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-5">
          <img src={whychooseimagetwo} alt="whychooseimagetwo" />
          <div>
            {whyChooseUs.map((obj) => (
              <div key={obj.id}>
                <h1 className="text-lg font-semibold">{obj.heading}</h1>
                <p className="text-gray-700">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
