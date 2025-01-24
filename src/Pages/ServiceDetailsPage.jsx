import servicelayouthelp from "../assets/image/servicelayouthelp.png";
import aidevelopmentbanner from "../assets/image/services/aidevelopmentbanner.png";
import aidevelopment from "../assets/image/services/aidevelopment.png";
import aidevelopment2 from "../assets/image/services/aidevelopment2.png";
import PageBanner from "../Components/PageBanner";
export default function ServiceDetailsPage() {
  const services = [
    { name: "AI Development", active: true },
    { name: "Software Development", active: false },
    { name: "Gaming Development", active: false },
    { name: "UI UX Designing", active: false },
    { name: "Content Management", active: false },
    { name: "Cyber Security", active: false },
  ];

  return (
    <>
      <PageBanner page={"AI Development"} bannerImage={aidevelopmentbanner} />
      <div className="container mx-auto px-4 py-[5rem]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="mb-8">
              <h2 className="font-bold mb-4">Services Category</h2>
              <div className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`text-left px-4 py-2 rounded transition-colors ${
                      service.active
                        ? "bg-[#E86C37] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Need Help Section */}
            <div className="bg-[#FFD68A] p-6 rounded-lg text-center">
              <h3 className="font-bold mb-4">Need Any Help?</h3>
              <div className="mb-4">
                <img
                  src={servicelayouthelp}
                  alt="Help Icon"
                  className="w-20 h-20 mx-auto rounded-full"
                />
              </div>
              <div className="mb-4">
                <p>+91 XXXXX-XXXXX</p>
              </div>
              <button className="bg-[#E86C37] text-white px-6 py-2 rounded">
                CONTACT NOW
              </button>
            </div>

            {/* Download Section */}
            <div className="mt-8">
              <h3 className="font-bold mb-4">Download</h3>
              <div className="flex flex-col gap-2">
                <button className="bg-[#FFD68A] px-4 py-2 rounded text-left">
                  Download 01
                </button>
                <button className="bg-[#FFD68A] px-4 py-2 rounded text-left">
                  Download 02
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <img
                  src={aidevelopment}
                  alt="AI Development Illustration"
                  className="w-full h-auto  rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-6">AI Development</h1>
                <p className="mb-6">
                  Artificial Intelligence (AI) Has Revolutionized The Way
                  Businesses Operate, And At Your Company Name, We Harness The
                  Power Of AI To Help Drive Business Value. Our AI Development
                  Services Include Predictive Analytics, Natural Language
                  Processing (NLP), And Machine Vision, Among Other Advanced
                  Technologies. These Solutions Enable Businesses To Automate
                  Processes, Gain Deep Insights, And Make Data-Driven Decisions
                  That Improve Efficiency And Foster Growth.
                </p>
                <h2 className="text-2xl font-bold mb-4">
                  The Power Of AI In Business
                </h2>
                <p className="mb-6">
                  AI Is A Critical Tool In Today&apos;s Business Environment,
                  And We Tailor Our Solutions To Meet Your Specific Needs.
                  Whether You&apos;re Aiming To Optimize Operations, Enhance
                  Customer Interactions, Or Gain A Competitive Edge, Our AI
                  Applications Are Designed To Support Your Business&apos;s
                  Objectives By Implementing Machine Learning Algorithms,
                  Predictive Models, And Intelligent Systems. We Ensure Your
                  Operations Become Smarter, More Efficient, And More Agile.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="font-bold mb-4">AI Development</h3>
                <p>
                  Skilled Professional Experienced in AI And Machine Learning
                  Technologies.
                </p>
              </div>
              <div className="bg-[#E86C37] text-white p-6 rounded-lg">
                <h3 className="font-bold mb-4">Cutting-Edge Technology</h3>
                <p>
                  Utilize The Latest AI Tools For High-Performance, Scalable
                  Solutions.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-8">
                Artificial Intelligence Is Revolutionizing The Way Businesses
                Make Decisions, Interact With Customers, And Optimize
                Operations. At [Your Company Name], We Empower Organizations To
                Harness The Full Potential Of AI, Providing Tailored Solutions
                That Drive Smarter Decision-Making, Improve Efficiency, And
                Enhance Customer Experiences.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={aidevelopment2}
                    alt="Analytics Dashboard"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-bold mb-2">Predictive Analytics:</h3>
                    <p>Forecast Future Trends And Make Proactive Decisions.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Intelligent Automation:</h3>
                    <p>
                      Automate Visual Tasks Like Quality Control And Facial
                      Recognition.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8">
                If You&apos;re Ready To Take Your Business To The Next Level
                With AI, Our Team Is Here To Help You Build The Systems That
                Will Transform Your Data Into A Powerful Asset. Contact Us Today
                To Learn How Our AI Development Solutions Can Revolutionize The
                Way You Operate And Compete In Today&apos;s Fast-Paced Digital
                World.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
