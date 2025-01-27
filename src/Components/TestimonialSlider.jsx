import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonials } from "../data/constant";

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 20,
    },
    loop: true,
    mode: "snap",
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000); // Auto-slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [instanceRef]);

  return (
    <div className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-black font-medium flex items-center gap-4">
            {" "}
            <div className="w-6 h-[2px] bg-orange-500 inline-flex " />
            OUR TESTIMONIAL
          </span>
        </div>
        <h2 className="heading-2 text-gray-900 max-w-2xl mx-auto">
          See What Our Clients Say: Real Results. Real Impact.
        </h2>
      </div>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider min-h-[18rem] pt-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="keen-slider__slide">
              <div
                className={`${
                  index % 2 === 0
                    ? `bg-orange-500 text-white`
                    : `bg-white text-black `
                } rounded-lg p-8  max-w-3xl mx-auto shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 fill-current"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  className={`${
                    index % 2 === 0 ? ` text-white` : ` text-black`
                  }  leading-relaxed`}
                >
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                currentSlide === idx ? "bg-[#FF6B35]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
