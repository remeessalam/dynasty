import Header from "./components/Header";
import LandingBanner from "./components/LandingBanner";
import LandingServices from "./components/LandingServices";
import LandingAbout from "./components/LandingAbout";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingForm from "./components/LandingForm";
import Footer from "./components/Footer";
import ContactForm from "../Components/ContactForm";
import TestimonialSlider from "../Components/TestimonialSlider";
import WhyChooseUs from "../Components/WhyChooseUs";
// eslint-disable-next-line
const LandingPage = ({ page }) => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <div className="">
        <LandingBanner page={page} />
        <div id="asdf" className=" wrapper mt-5 sm:mt-20 pt-1 rounded-xl">
          <LandingForm />
        </div>
        <div id="about">
          <LandingAbout page={page} />
        </div>
        <div id="services" className=" mx-auto mt-4 sm:mt-16">
          <LandingServices page={page} />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        {/* <div>
          <Portfolio page={page} />
        </div> */}

        <div>
          <TestimonialSlider />
        </div>

        <div
          id="contact-us"
          className="adjustedwidth mx-auto  mt-5 sm:mt-20 pt-1 rounded-xl"
        >
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
