import { Link } from "react-router-dom";
import { allServices } from "../data/constant";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* <h2
          className="text-sm font-semibold tracking-wide uppercase"
          data-aos="fade-up"
        >
          OUR SERVICES
        </h2> */}
        <span
          data-aos="fade-up"
          className="text-black font-medium flex items-center justify-center gap-4"
        >
          {" "}
          <div className="w-6 h-[2px] bg-orange-500 inline-flex " />
          OUR SERVICES
        </span>
        <h1
          className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold"
          data-aos="fade-up"
        >
          Empowering <span className="text-orange-500">Innovation</span>,
          Delivering
          <br />
          <span className="text-orange-500">Excellence</span> – Transforming
          Ideas into
          <br />
          <span className="text-orange-500">Impactful Solutions.</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600" data-aos="fade-up">
          At [Your Company Name], we offer a comprehensive suite of services
          designed to help businesses harness the power of technology and
          innovation. From transforming data into insights to building immersive
          digital experiences, we deliver solutions that empower your success.
        </p>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map((obj) => (
            <Link
              to={`/services/${obj.pathname}`}
              data-aos="fade-up"
              key={obj.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={obj.mainImage || "/placeholder.svg"}
                  alt={obj.title}
                  className="w-full max-h-[12rem] object-cover min-h-[12rem]"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                  {obj.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-4">
                  {obj.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
