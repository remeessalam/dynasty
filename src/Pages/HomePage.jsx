import BlogSection from "../Components/BlogsSection";
import HomeAbout from "../Components/HomeAbout";
import HomeBanner from "../Components/HomeBanner";
import ServiceCard from "../Components/ServiceCard";
import Services from "../Components/Services";
import TestimonialSlider from "../Components/TestimonialSlider";
import Vision from "../Components/Vision";
import WhyChooseUs from "../Components/WhyChooseUs";
import { homePageServices } from "../data/constant";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {homePageServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <HomeAbout />
      </div>
      <Services />
      <Vision />
      <WhyChooseUs />
      <TestimonialSlider />
      <BlogSection />
    </div>
  );
};

export default HomePage;
