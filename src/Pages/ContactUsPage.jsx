// import { useForm } from "react-hook-form";
import contactusimg from "../assets/image/bannerimages/contactusimg.png";
import PageBanner from "../Components/PageBanner";

import contactusimage from "../assets/image/contactusimage.png";
import ContactForm from "../Components/ContactForm";
const ContactUsPage = () => {
  return (
    <div>
      <PageBanner page={"contact"} bannerImage={contactusimg} />
      <ContactForm />
      <div className="relative">
        <img src={contactusimage} alt="" className="w-screen mt-[5rem]" />
        <div className="absolute w-full h-full top-0 flex md:justify-start justify-center items-center md:text-start text-center  md:pl-[5rem]">
          <h1 className="heading-1 text-primary">
            Contact <br /> Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
