import ReactPlayer from "react-player";
import aboutusimage from "../assets/image/aboutusimage.png";
import aboutusbgvideo from "../assets/video/aboutusbgvideo.mp4";
import { AiOutlineAim } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { GiDiamondHard } from "react-icons/gi";
import TeamSection from "../Components/OurTeam";
import PageBanner from "../Components/PageBanner";
import aboutusbannerimage from "../assets/image/aboutusbannerimage.png";
const AboutUsPage = () => {
  return (
    <>
      <PageBanner page={"About us"} bannerImage={aboutusbannerimage} />

      <section className="relative py-12">
        <div className="space-y-12">
          {/* Header Section */}

          {/* Main Content Grid */}
          {/* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start wrapper">
            {/* Image Section */}
            <div className=" h-[400px] lg:h-[500px] bg-blue-900 overflow-hidden">
              <div className="absolute top-20 left-0 w-1/2 -z-10 h-[40%] lg:flex hidden bg-orange-400" />
              <img
                src={aboutusimage}
                alt="Future Technology Concept"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-700">
              <div>
                <span className="text-black font-medium flex items-center gap-4">
                  {" "}
                  <div className="w-6 h-[2px] bg-orange-500 inline-flex " />
                  ABOUT US
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                  Empowering Your Future with Innovative, Tailored Digital
                  Solutions.
                </h1>
              </div>

              <p className="leading-relaxed">
                At [Your Company Name], we are driven by a passion for
                innovation and a commitment to excellence. We specialize in
                providing cutting-edge digital solutions that empower businesses
                to thrive in today&apos;s fast-paced technological
                landscape.From AI-driven systems to immersive VR & AR
                experiences, blockchain solutions, mobile apps, and custom
                software, we are your trusted partner in turning bold ideas into
                impactful results.
              </p>

              <p className="leading-relaxed">
                Our team of highly skilled professionals brings a diverse set of
                expertise to the table, combining technical knowledge with a
                deep understanding of business needs. Whether you&apos;re a
                startup looking to make your mark or an established enterprise
                seeking to transform, we work closely with you to craft
                solutions that align with your objectives and drive measurable
                success.
              </p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="space-y-6 text-gray-700 wrapper ">
            <p className="leading-relaxed">
              We believe in collaboration, transparency, and a customer-first
              approach. Our process is designed to keep you informed and
              involved every step of the way, ensuring that the solutions we
              deliver are not only innovative but also functional and scalable.
              At [Your Company Name], we don&apos;t just build technology—we
              build partnerships that last.
            </p>

            <p className="leading-relaxed">
              Innovation is at the heart of everything we do. From the first
              concept to deployment and beyond, we are dedicated to providing
              you with solutions that evolve with your business and the
              ever-changing digital world. We take pride in our ability to stay
              ahead of the curve, exploring new technologies and methodologies
              to ensure that we bring the best to our clients.
            </p>

            <p className="leading-relaxed">
              Ready to take your business to the next level? Let us help you
              unlock the power of technology to achieve your goals. At [Your
              Company Name], we are here to turn your vision into reality with
              solutions that make a difference.
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="text-center space-y-4 text-gray-600 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-2xl font-semibold">
              Ready to take your business to new heights?
            </h2>
            <p className="text-xl">
              Let&apos;s bring your ideas to life with innovative, user-focused
              technology that makes a difference.
            </p>
            <p className="text-lg">
              Contact us today to learn how [Your Company Name] can turn your
              vision into a powerful realit
            </p>
          </div>
        </div>
      </section>
      <section className="flex h-[90vh] items-center justify-center py-12">
        <ReactPlayer
          url={aboutusbgvideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute -z-10"
        />
        <div className="bg-[#D5632F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-[2px] bg-white"></div>
                  <span className="text-white font-medium tracking-wider text-sm">
                    WHY CHOICE US
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                  Choose Us for Innovation, Quality, and Tailored Solutions that
                  Drive Your Success.
                </h1>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Innovation-Driven */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <TbTargetArrow className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white">
                      Innovation-Driven:
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      We&apos;re passionate about exploring new solutions to
                      bring creative ideas to life and solve complex problems
                    </p>
                  </div>
                </div>

                {/* Uncompromised Quality */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <AiOutlineAim className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white">
                      Uncompromised Quality:
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      We&apos;re committed to building robust, reliable
                      solutions that are both functional and scalable.
                    </p>
                  </div>
                </div>

                {/* Customer-Focused Approach */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <GiDiamondHard className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white">
                      Customer-Focused Approach:
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      Your objectives shape our process, and we work alongside
                      you to ensure every project aligns with your vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </>
  );
};

export default AboutUsPage;
