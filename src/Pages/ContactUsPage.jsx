import { useForm } from "react-hook-form";
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
const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };
  return (
    <div>
      <PageBanner page={"contact"} bannerImage={contactusimg} />
      <div className=" bg-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-[#FFF5F0] p-8 rounded-lg">
            <h2 className="text-[#FF6B3D] text-2xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8">
              Embark on a Digital Journey with Us. Reach out, and let&apos;s
              transform your ideas into innovative solutions together. Your
              vision, feedback, and goals are the building blocks that shape our
              creative process. Get in touch, and let&apos;s craft the future of
              technology!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <span className="w-6 h-6 flex items-center justify-center mr-3">
                  ✉️
                </span>
                <span>{companyDetails.email}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-6 h-6 flex items-center justify-center mr-3">
                  📞
                </span>
                <span>{companyDetails.phone}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-6 h-6 flex items-center justify-center mr-3">
                  📍
                </span>
                <div>{companyDetails.address}</div>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                FaYoutube,
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6B3D] hover:bg-[#FF6B3D] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="p-4">
            <div className="mb-8">
              <span className="text-[#FF6B3D] uppercase tracking-wider">
                MESSAGE US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Get in Touch and Let&apos;s Build Something Extraordinary
                Together.
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B3D]"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B3D]"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B3D]"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Please enter a valid email
                    </span>
                  )}
                </div>
                <div>
                  <input
                    {...register("phone", { required: true })}
                    placeholder="Phone"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B3D]"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("subject", { required: true })}
                  placeholder="Subject"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B3D]"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Write a message"
                  rows="6"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B3D]"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#FF6B3D] text-white px-6 py-3 rounded-md hover:bg-[#e85d2f] transition-colors"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img src={contactusimage} alt="" className="w-screen mt-[5rem]" />
      </div>
    </div>
  );
};

export default ContactUsPage;
