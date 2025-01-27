// import { useForm } from "react-hook-form";
import contactusimg from "../assets/image/bannerimages/contactusimg.png";
import PageBanner from "../Components/PageBanner";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { companyDetails } from "../data/constant";

import contactusimage from "../assets/image/contactusimage.png";
import ContactForm from "../Components/ContactForm";
const ContactUsPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // Handle form submission here
  // };
  return (
    <div>
      <PageBanner page={"contact"} bannerImage={contactusimg} />
      <ContactForm />
      <div>
        <img src={contactusimage} alt="" className="w-screen mt-[5rem]" />
      </div>
    </div>
  );
};

export default ContactUsPage;
